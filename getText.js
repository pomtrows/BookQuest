import fs from 'fs';
const content = fs.readFileSync('src/data/book2.ts', 'utf-8');
const sections = ['91'];
sections.forEach(id => {
  const regex = new RegExp('"' + id + '": \\{[\\s\\S]*?"text": \\[\\s*"([^"]+)"');
  const match = content.match(regex);
  console.log(id + ': ' + (match ? match[1].substring(0, 150) : 'none'));
});
