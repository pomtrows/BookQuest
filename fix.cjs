const fs = require('fs');
let c = fs.readFileSync('src/data/story.ts', 'utf8');
c = c.replace(/"Masse d'Armes"/g, '`Masse d\\'armes`');
c = c.replace(/"Lance de Glok"/g, '"Lance"');
c = c.replace(/"Marteau de Guerre"/g, '"Marteau de guerre"');
fs.writeFileSync('src/data/story.ts', c);
