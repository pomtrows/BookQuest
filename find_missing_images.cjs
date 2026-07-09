const fs = require('fs');
const path = require('path');

const tsFile = "C:\\PROJET\\Book Quest\\src\\data\\story.ts";
const imgDir = "C:\\PROJET\\Book Quest\\public\\images\\sections";
const content = fs.readFileSync(tsFile, 'utf8');

const regex = /"(\d+)":\s*{[\s\S]*?}/g;
let match;
let missing = [];

const existingImages = new Set(fs.readdirSync(imgDir));

while ((match = regex.exec(content)) !== null) {
  const sectionText = match[0];
  const sectionId = match[1];
  
  const expectedImageName = `sect${sectionId}.png`;
  
  if (!existingImages.has(expectedImageName)) {
    const textMatch = sectionText.match(/"text":\s*(\[[\s\S]*?\]|".*?"),/);
    missing.push({
      id: sectionId,
      text: textMatch ? textMatch[1] : ''
    });
  }
}

for(let i=0; i<20; i++) {
  if (missing[i]) {
    console.log(`Section ${missing[i].id}: ${missing[i].text.substring(0, 300).replace(/\n/g, ' ')}...`);
  }
}
