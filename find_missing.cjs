const fs = require('fs');
const book = process.argv[2] || '1';
const content = fs.readFileSync(`src/data/book${book}.ts`, 'utf8');
const missing = [];
for (let i = 1; i <= 350; i++) {
  const regex = new RegExp(`"${i}":\\s*\\{([\\s\\S]*?)(?=\\n\\s*"\\d+":|\\n\\s*\\};)`, 'g');
  const match = regex.exec(content);
  if (match && !match[1].includes('"image":')) {
    missing.push(i);
  }
}
console.log(`Missing images for Book ${book}:`, missing.join(', '));
