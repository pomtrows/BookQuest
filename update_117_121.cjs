const fs = require('fs');
const path = require('path');

const srcPaths = [
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect117_1786766428520.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect118_1786766437808.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect119_1786766445581.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect120_1786766456945.jpg',
    'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\9d273d25-1ae5-47b9-8ec9-4ebb0e8d003f\\book2_sect121_1786766465081.jpg'
];

const destPaths = [
    'public/images/sections/book2_sect117.jpg',
    'public/images/sections/book2_sect118.jpg',
    'public/images/sections/book2_sect119.jpg',
    'public/images/sections/book2_sect120.jpg',
    'public/images/sections/book2_sect121.jpg'
];

for (let i = 0; i < srcPaths.length; i++) {
    fs.copyFileSync(srcPaths[i], destPaths[i]);
    console.log(`Copied ${destPaths[i]}`);
}

let content = fs.readFileSync('src/data/book2.ts', 'utf-8');
const sections = ['117','118','119','120','121'];
sections.forEach(id => {
  const target = `"id": "${id}",\n`;
  const replacement = `"id": "${id}",\n    "image": "/images/sections/book2_sect${id}.jpg",\n`;
  content = content.replace(target, replacement);
});
fs.writeFileSync('src/data/book2.ts', content, 'utf-8');
console.log('book2.ts updated for 117-121');
