const fs = require('fs');
const code = fs.readFileSync('src/data/story.ts', 'utf8');
const match = code.match(/id: '[a-zA-Z0-9_]+'/g);
console.log('Total sections:', match ? match.length : 0);
const imgMatch = code.match(/image:/g);
console.log('Total images:', imgMatch ? imgMatch.length : 0);
