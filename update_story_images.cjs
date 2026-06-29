const fs = require('fs');

let code = fs.readFileSync('src/data/story.ts', 'utf8');

const updates = [
  { id: '349', image: '/images/sections/sect349.png' },
  { id: '153', image: '/images/sections/sect153.png' },
  { id: '142', image: '/images/sections/sect153.png' },
  { id: '263', image: '/images/sections/sect263.png' },
  { id: '155', image: '/images/sections/sect155.png' }
];

updates.forEach(u => {
  const targetRegex = new RegExp(`("${u.id}": \\{[\\s\\S]*?"text": \\[[\\s\\S]*?\\n    \\],)`, 'g');
  code = code.replace(targetRegex, `$1\n    "image": "${u.image}",`);
});

fs.writeFileSync('src/data/story.ts', code);
console.log('Images added successfully');
