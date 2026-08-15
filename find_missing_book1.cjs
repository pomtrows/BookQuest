const fs = require('fs');
const content = fs.readFileSync('src/data/book1.ts', 'utf8');
const missing = [];
for (let i = 1; i <= 350; i++) {
  const m = new RegExp(`"${i}":\\s*\\{([\\s\\S]*?)(?=\\n\\s*"\\d+":|\\n\\s*\\};)`, 'g').exec(content);
  if (m && !m[1].includes('"image":')) {
    missing.push(i);
  }
}
console.log('Missing images for Book 1:', missing.join(', '));
