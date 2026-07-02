const fs = require('fs');

const storyFile = 'src/data/story.ts';
let content = fs.readFileSync(storyFile, 'utf8');

const damages = {
  "77": `"damage": 2,\n    `,
  "151": `"damage": 2,\n    `,
  "153": `"damage": 3,\n    `,
  "165": `"damage": 6,\n    `,
  "172": `"damage": 4,\n    `,
  "206": `"damage": 10,\n    `,
  "276": `"damage": 1,\n    `,
  "304": `"damage": 2,\n    `,
  "309": `"damage": 1,\n    `,
  "341": `"damage": 2,\n    `
};

for (const [id, damageStr] of Object.entries(damages)) {
  const regex = new RegExp(`("id":\\s*"${id}",\\s*\\n\\s*"location":\\s*"[^"]+",\\s*\\n\\s*)`);
  content = content.replace(regex, `$1${damageStr}`);
}

fs.writeFileSync(storyFile, content, 'utf8');
console.log("Injected damages into story.ts");
