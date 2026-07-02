const fs = require('fs');

const storyFile = 'src/data/story.ts';
let content = fs.readFileSync(storyFile, 'utf8');

const damages = {
  "144": 2,
  "146": 3,
  "158": 6,
  "166": 4,
  "203": 10,
  "343": 2
};

for (const [id, damageVal] of Object.entries(damages)) {
  const regex = new RegExp(`("id":\\s*"${id}",\\s*\\n\\s*"location":\\s*"[^"]+",\\s*\\n\\s*)`);
  if (content.match(regex)) {
    content = content.replace(regex, `$1"damage": ${damageVal},\n    `);
  }
}

fs.writeFileSync(storyFile, content, 'utf8');
console.log("Injected additional damages into story.ts");
