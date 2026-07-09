const fs = require('fs');
let content = fs.readFileSync('src/data/story.ts', 'utf8');
let changes = 0;
for (let i = 1; i <= 350; i++) {
  if (fs.existsSync('public/images/sections/sect' + i + '.png')) {
    const idLine = `"id": "${i}",`;
    const regex = new RegExp(`"id": "${i}",`);
    const match = content.match(regex);
    if (match) {
      const startIndex = match.index;
      const nextMatch = content.substring(startIndex + 10).match(/"id": "/);
      const endIndex = nextMatch ? startIndex + 10 + nextMatch.index : content.length;
      const block = content.substring(startIndex, endIndex);
      if (!block.includes('"image":')) {
        content = content.replace(idLine, idLine + '\n    "image": "/images/sections/sect' + i + '.png",');
        changes++;
      }
    }
  }
}
fs.writeFileSync('src/data/story.ts', content, 'utf8');
console.log('Update complete. Modified ' + changes + ' sections.');
