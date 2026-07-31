const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\c62a4d10-d18a-4283-be2e-976561d282f3';
const destDir = 'c:\\PROJET\\Book Quest\\public\\images\\sections';
const tsFile = 'c:\\PROJET\\Book Quest\\src\\data\\book2.ts';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let content = fs.readFileSync(tsFile, 'utf8');
const files = fs.readdirSync(brainDir);

let updated = false;

for (let i = 42; i <= 42; i++) {
  const file = files.find(f => f.startsWith(`book2_sect${i}_`) && f.endsWith('.jpg'));
  if (file) {
    const srcPath = path.join(brainDir, file);
    const destName = `book2_sect${i}.jpg`;
    const destPath = path.join(destDir, destName);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to ${destName}`);
    
    // Update book2.ts
    const searchString = `"id": "${i}",`;
    if (content.includes(searchString)) {
      const replaceString = `"id": "${i}",\n    "image": "/images/sections/${destName}",`;
      if (!content.includes(`"image": "/images/sections/${destName}"`)) {
        content = content.replace(searchString, replaceString);
        updated = true;
        console.log(`Updated book2.ts for section ${i}`);
      }
    }
  }
}

if (updated) {
  fs.writeFileSync(tsFile, content);
  console.log('Saved book2.ts');
}
