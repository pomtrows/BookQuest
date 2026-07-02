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
const nextBatch = [43, 44, 45, 46, 47, 48, 49, 51];
console.log('Next sections:', nextBatch.join(', '));
for (const id of nextBatch) {
  if (sections[id]) {
    console.log(`\nSection ${id}:\n`, sections[id].text.substring(0, 300));
  }
}
