const fs = require('fs');
const content = fs.readFileSync('src/data/book2.ts', 'utf8');
const sections = content.split('"id": "').slice(1);
let missing = [];
for (let s of sections) {
  const id = s.split('"')[0];
  const textMatch = s.match(/"text":\s*\[\s*"([^"]+)"/);
  if (textMatch && !s.includes('"image":')) {
    missing.push({id, text: textMatch[1].substring(0, 300)});
    if (missing.length >= 10) break;
  }
}
fs.writeFileSync('missing.json', JSON.stringify(missing, null, 2));
