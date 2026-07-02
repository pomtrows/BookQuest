const fs = require('fs');
let c = fs.readFileSync('src/data/story.ts', 'utf8');

c = c.replace(/"name":\s*"GLUÂTRE DES PROFONDEURS",\s*\n\s*"combatSkill":\s*17,\s*\n\s*"endurance":\s*7/g, 
  '"name": "GLUÂTRE DES PROFONDEURS",\n      "combatSkill": 17,\n      "endurance": 7,\n      "mindblastImmune": true,\n      "darknessPenalty": true');

const loot347 = `"loot": {
      "weapons": ["Sabre"],
      "items": ["Torche", "Briquet à amadou"]
    },
    "text": [`;

c = c.replace(/"id":\s*"347",\s*\n\s*"location":\s*"forest",\s*\n\s*"text":\s*\[/g, `"id": "347",\n    "location": "forest",\n    ${loot347}`);

fs.writeFileSync('src/data/story.ts', c);
console.log("Updated 170 and 347");
