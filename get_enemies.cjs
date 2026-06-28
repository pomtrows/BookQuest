const fs = require('fs');

const data = fs.readFileSync('src/data/story.ts', 'utf8');
const regex = /"combat":\s*\{\s*"name":\s*"([^"]+)"/g;
let match;
const enemies = new Set();
while ((match = regex.exec(data)) !== null) {
  enemies.add(match[1]);
}

// there might also be lists of enemies
const regexList = /"combat":\s*\[(.*?)\]/gs;
let match2;
while ((match2 = regexList.exec(data)) !== null) {
  const content = match2[1];
  const nameRegex = /"name":\s*"([^"]+)"/g;
  let nameMatch;
  while ((nameMatch = nameRegex.exec(content)) !== null) {
    enemies.add(nameMatch[1]);
  }
}

console.log(Array.from(enemies).sort());
