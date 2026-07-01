const fs = require('fs');
let content = fs.readFileSync('src/data/story.ts', 'utf-8');

const updates = [20];

for (const id of updates) {
  const regex = new RegExp(`("${id}":\\s*\\{\\s*\\n\\s*)("text")`);
  content = content.replace(regex, `$1"image": "/images/sections/sect${id}.png",\n      $2`);
}

fs.writeFileSync('src/data/story.ts', content);
