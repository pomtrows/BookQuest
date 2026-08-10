import fs from 'fs';
let content = fs.readFileSync('src/data/book2.ts', 'utf-8');
const sections = ['87','88','89','90'];
sections.forEach(id => {
  const target = `"id": "${id}",\n`;
  const replacement = `"id": "${id}",\n    "image": "/images/sections/book2_sect${id}.jpg",\n`;
  content = content.replace(target, replacement);
});
fs.writeFileSync('src/data/book2.ts', content, 'utf-8');
console.log('book2.ts updated for 87-90');
