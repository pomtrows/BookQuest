const fs = require('fs');
const path = require('path');

const tsFile = "C:\\PROJET\\Book Quest\\src\\data\\story.ts";
const imgDir = "C:\\PROJET\\Book Quest\\public\\images\\sections";
const content = fs.readFileSync(tsFile, 'utf8');

const existingImages = fs.readdirSync(imgDir).filter(f => f.endsWith('.png'));
let orphaned = [];

for (const img of existingImages) {
  if (!content.includes(`"/images/sections/${img}"`)) {
    orphaned.push(img);
  }
}

console.log(`Found ${orphaned.length} orphaned images.`);
console.log(orphaned.join(', '));
