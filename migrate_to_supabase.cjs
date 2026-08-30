const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://supabasemulti.imagina.sbs';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc4NDM3NjU0MCwiZXhwIjo0OTQwMDUwMTQwLCJyb2xlIjoic2VydmljZV9yb2xlIn0.GuKmSbdLiUTRx9pwIj8FiSUZkOmd69-0mcX3nOewsPI';
const BUCKET = 'loupsolitaire';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const sectionsDir = path.resolve(__dirname, '../../../../../../PROJET/Book Quest/public/images/sections');

async function uploadFile(storagePath, buffer, contentType) {
  const { data, error } = await supabase.storage.from(BUCKET).upload(storagePath, buffer, {
    contentType,
    upsert: true
  });
  if (error) {
    throw new Error(`Erreur upload ${storagePath}: ${error.message}`);
  }
  return data;
}

async function processImages() {
  console.log('🚀 Démarrage du traitement et de l\'upload des images vers Supabase Storage...\n');
  const files = fs.readdirSync(sectionsDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f));
  console.log(`📁 ${files.length} fichiers trouvés dans ${sectionsDir}.\n`);

  let successCount = 0;
  let totalOriginalBytes = 0;
  let totalCompressedBytes = 0;

  // Batching concurrency
  const CONCURRENCY = 5;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const chunk = files.slice(i, i + CONCURRENCY);
    await Promise.all(chunk.map(async (file) => {
      const filePath = path.join(sectionsDir, file);
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);
      const originalBuffer = fs.readFileSync(filePath);
      totalOriginalBytes += originalBuffer.length;

      const mimeType = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : 'image/jpeg');

      // 1. Upload Full Format (dans full/)
      const fullPath = `full/${file}`;
      await uploadFile(fullPath, originalBuffer, mimeType);

      // 2. Conversion & Compression WebP (même résolution, compression optimisée qualité 80)
      const compressedBuffer = await sharp(originalBuffer)
        .webp({ quality: 80, effort: 4 })
        .toBuffer();
      totalCompressedBytes += compressedBuffer.length;

      // 3. Upload Compressed Format (dans compressed/)
      const compressedPath = `compressed/${baseName}.webp`;
      await uploadFile(compressedPath, compressedBuffer, 'image/webp');

      successCount++;
    }));

    console.log(`⏳ Progression : ${Math.min(i + CONCURRENCY, files.length)}/${files.length} fichiers traités...`);
  }

  const origMB = (totalOriginalBytes / (1024 * 1024)).toFixed(2);
  const compMB = (totalCompressedBytes / (1024 * 1024)).toFixed(2);
  const gain = (100 - (totalCompressedBytes / totalOriginalBytes) * 100).toFixed(1);

  console.log('\n✅ Traitement terminé avec succès !');
  console.log(`📊 Bilan : ${successCount} images uploadées dans le bucket "${BUCKET}".`);
  console.log(`💾 Poids total Original (full/) : ${origMB} Mo`);
  console.log(`⚡ Poids total WebP Compressé (compressed/) : ${compMB} Mo (gain de fluidité : -${gain}% !)`);
}

processImages().catch(err => {
  console.error('❌ Erreur lors du traitement :', err);
  process.exit(1);
});
