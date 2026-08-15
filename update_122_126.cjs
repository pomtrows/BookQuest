const fs = require('fs');
const path = require('path');

const srcPaths = [
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect122_1786766514180.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect123_1786766523861.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect124_1786766531519.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect125_1786766540641.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect126_1786766549462.jpg'
];

const destPaths = [
    'public/images/sections/book2_sect122.jpg',
    'public/images/sections/book2_sect123.jpg',
    'public/images/sections/book2_sect124.jpg',
    'public/images/sections/book2_sect125.jpg',
    'public/images/sections/book2_sect126.jpg'
];

for (let i = 0; i < srcPaths.length; i++) {
    fs.copyFileSync(srcPaths[i], destPaths[i]);
    console.log(`Copied ${destPaths[i]}`);
}

let content = fs.readFileSync('src/data/book2.ts', 'utf-8');
const sections = ['122','123','124','125','126'];
sections.forEach(id => {
  const target = `"id": "${id}",\n`;
  const replacement = `"id": "${id}",\n    "image": "/images/sections/book2_sect${id}.jpg",\n`;
  content = content.replace(target, replacement);
});
fs.writeFileSync('src/data/book2.ts', content, 'utf-8');
console.log('book2.ts updated for 122-126');
