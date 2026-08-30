const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://supabasemulti.imagina.sbs';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc4NDM3NjU0MCwiZXhwIjo0OTQwMDUwMTQwLCJyb2xlIjoic2VydmljZV9yb2xlIn0.GuKmSbdLiUTRx9pwIj8FiSUZkOmd69-0mcX3nOewsPI';
const BUCKET = 'loupsolitaire';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function uploadSingleImage(localFilePath, targetName) {
  if (!fs.existsSync(localFilePath)) {
    console.error(`❌ Fichier introuvable : ${localFilePath}`);
    process.exit(1);
  }

  const finalName = targetName || path.basename(localFilePath);
  const ext = path.extname(finalName).toLowerCase();
  const baseName = path.basename(finalName, ext);
  const buffer = fs.readFileSync(localFilePath);
  const mimeType = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : 'image/jpeg');

  console.log(`📤 Upload de ${finalName} (${(buffer.length / 1024).toFixed(1)} Ko)...`);

  // 1. Upload Full
  const { error: errFull } = await supabase.storage.from(BUCKET).upload(`full/${finalName}`, buffer, {
    contentType: mimeType,
    upsert: true
  });
  if (errFull) throw new Error(`Erreur full: ${errFull.message}`);

  // 2. Conversion WebP
  const compressedBuffer = await sharp(buffer)
    .webp({ quality: 80, effort: 4 })
    .toBuffer();

  // 3. Upload Compressed
  const { error: errComp } = await supabase.storage.from(BUCKET).upload(`compressed/${baseName}.webp`, compressedBuffer, {
    contentType: 'image/webp',
    upsert: true
  });
  if (errComp) throw new Error(`Erreur compressed: ${errComp.message}`);

  console.log(`✅ Upload réussi dans Supabase : full/${finalName} et compressed/${baseName}.webp (${(compressedBuffer.length / 1024).toFixed(1)} Ko - gain : -${(100 - (compressedBuffer.length / buffer.length) * 100).toFixed(1)}%)`);
}

const fileArg = process.argv[2];
const targetNameArg = process.argv[3];

if (!fileArg) {
  console.log('Usage: node upload_image.cjs <chemin_vers_image> [nom_cible_final]');
  process.exit(1);
}

uploadSingleImage(path.resolve(fileArg), targetNameArg).catch(err => {
  console.error('❌ Erreur :', err);
  process.exit(1);
});
