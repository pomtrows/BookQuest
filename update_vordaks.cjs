const fs = require('fs');
let c = fs.readFileSync('src/data/story.ts', 'utf8');

c = c.replace(/"name":\s*"VORDAK",\s*\n\s*"combatSkill":\s*(\d+),\s*\n\s*"endurance":\s*(\d+)/g, 
  '"name": "VORDAK",\n      "combatSkill": $1,\n      "endurance": $2,\n      "mindblastImmune": true,\n      "hasMindblast": true');

fs.writeFileSync('src/data/story.ts', c);
