const fs = require('fs');
const content = fs.readFileSync('src/data/story.ts', 'utf-8');

// A very naive regex to extract sections
// This might fail depending on the format, but let's try.
const sections = {};
const lines = content.split('\n');
let currentSection = null;

for (const line of lines) {
  const match = line.match(/^\s*"(\d+)":\s*\{/);
  if (match) {
    currentSection = match[1];
    sections[currentSection] = { hasImage: false, text: '' };
  } else if (currentSection) {
    if (line.includes('"image":')) {
      sections[currentSection].hasImage = true;
    }
    if (line.includes('"text":')) {
      sections[currentSection].text += line;
    } else if (sections[currentSection].text && !line.includes('"choices"')) {
      sections[currentSection].text += line;
    }
  }
}

const missing = Object.keys(sections).filter(k => !sections[k].hasImage);
console.log('Missing images for:', missing.slice(0, 30).join(', '));
for(let i=0; i<8; i++) {
  console.log(`\nSection ${missing[i]}:\n`, sections[missing[i]].text.substring(0, 300));
}
