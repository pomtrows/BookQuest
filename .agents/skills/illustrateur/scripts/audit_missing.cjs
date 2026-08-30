const fs = require('fs');
const path = require('path');

const srcDataDir = path.resolve(__dirname, '../../../../src/data');

function auditBook(bookNumber) {
  const filePath = path.join(srcDataDir, `book${bookNumber}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier introuvable : ${filePath}`);
    return { book: bookNumber, exists: false, total: 0, missing: [] };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const missing = [];
  let totalFound = 0;

  // Détection souple des sections jusqu'à 600
  for (let i = 1; i <= 600; i++) {
    const regex = new RegExp(`"${i}":\\s*\\{([\\s\\S]*?)(?=\\n\\s*"\\d+":|\\n\\s*\\};)`, 'g');
    const match = regex.exec(content);
    if (match) {
      totalFound++;
      if (!match[1].includes('"image":')) {
        missing.push(i);
      }
    }
  }

  return { book: bookNumber, exists: true, total: totalFound, missing };
}

const arg = process.argv[2];

if (!arg || arg === '--all') {
  console.log('🔍 Scan de tous les livres disponibles dans src/data/ ...\n');
  const files = fs.readdirSync(srcDataDir).filter(f => /^book\d+\.ts$/.test(f));
  
  if (files.length === 0) {
    console.log('Aucun fichier de livre trouvé (format attendu : book<N>.ts)');
    process.exit(0);
  }

  files.sort((a, b) => {
    const numA = parseInt(a.replace('book', '').replace('.ts', ''), 10);
    const numB = parseInt(b.replace('book', '').replace('.ts', ''), 10);
    return numA - numB;
  });

  files.forEach(file => {
    const bookNum = file.replace('book', '').replace('.ts', '');
    const result = auditBook(bookNum);
    const illustrated = result.total - result.missing.length;
    const pct = result.total > 0 ? Math.round((illustrated / result.total) * 100) : 0;
    console.log(`📖 Livre ${bookNum} : ${illustrated}/${result.total} illustrés (${pct}%) - ${result.missing.length} manquants`);
    if (result.missing.length > 0) {
      const preview = result.missing.slice(0, 10).join(', ') + (result.missing.length > 10 ? '...' : '');
      console.log(`   👉 Prochaines sections à faire : ${preview}`);
    }
    console.log('');
  });
} else {
  const bookNum = arg.replace('book', '');
  const result = auditBook(bookNum);
  if (result.exists) {
    const illustrated = result.total - result.missing.length;
    const pct = result.total > 0 ? Math.round((illustrated / result.total) * 100) : 0;
    console.log(`📖 Livre ${bookNum} : ${illustrated}/${result.total} illustrés (${pct}%)`);
    console.log(`Missing images for Book ${bookNum}: ${result.missing.join(', ')}`);
  }
}
