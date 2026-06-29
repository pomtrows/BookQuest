const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, 'src', 'data', 'story.ts'), 'utf8');

// The storyData object is a large JS object. We can parse it by matching the structure or using regex.
// Regex to extract section IDs and their text array.
const sections = [];
const regex = /"(\d+)": \{\s*"id": "\1",[\s\S]*?"text": \[([\s\S]*?)\]/g;
let match;

while ((match = regex.exec(code)) !== null) {
  const id = match[1];
  const textArrayStr = match[2];
  
  // Count paragraphs roughly by counting commas or quotes, but length is easier
  const length = textArrayStr.length;
  
  // Also check if it already has an image
  // It's a bit tricky with just this regex, let's look ahead for "image":
  const fullSectionRegex = new RegExp(`"${id}": \\{[\\s\\S]*?\\},`, 'g');
  const fullSectionMatch = code.match(fullSectionRegex);
  const hasImage = fullSectionMatch ? fullSectionMatch[0].includes('"image":') || fullSectionMatch[0].includes('[IMG]') : false;
  
  if (!hasImage) {
    sections.push({ id, length });
  }
}

// Sort by length descending
sections.sort((a, b) => b.length - a.length);

console.log('Top 10 longest sections without images:');
for (let i = 0; i < Math.min(10, sections.length); i++) {
  console.log(`Section ${sections[i].id}: ${sections[i].length} chars`);
}
