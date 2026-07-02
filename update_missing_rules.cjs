const fs = require('fs');

let c = fs.readFileSync('src/data/story.ts', 'utf8');

// 19: csModifier: -1
c = c.replace(/"name":\s*"KRAAN",\s*\r?\n\s*"combatSkill":\s*16,\s*\r?\n\s*"endurance":\s*24/g, 
  '"name": "KRAAN",\n      "combatSkill": 16,\n      "endurance": 24,\n      "csModifier": -1');

// 133: mindblastImmune: true
c = c.replace(/"name":\s*"SERPENT AILÉ",\s*\r?\n\s*"combatSkill":\s*16,\s*\r?\n\s*"endurance":\s*18/g,
  '"name": "SERPENT AILÉ",\n      "combatSkill": 16,\n      "endurance": 18,\n      "mindblastImmune": true');

// 169: escapeRound: 1, isFlee: true
c = c.replace(/"name":\s*"MONSTRES DES CRYPTES",\s*\r?\n\s*"combatSkill":\s*16,\s*\r?\n\s*"endurance":\s*16/g,
  '"name": "MONSTRES DES CRYPTES",\n      "combatSkill": 16,\n      "endurance": 16,\n      "escapeRound": 1');
c = c.replace(/"text":\s*"Si vous préférez fuir, rendez-vous au 87.",\s*\r?\n\s*"targetId":\s*"87"/g,
  '"text": "Si vous préférez fuir, rendez-vous au 87.",\n        "targetId": "87",\n        "isFlee": true');

// 230: csModifier: -1
c = c.replace(/"name":\s*"GLOKS",\s*\r?\n\s*"combatSkill":\s*13,\s*\r?\n\s*"endurance":\s*10/g,
  '"name": "GLOKS",\n      "combatSkill": 13,\n      "endurance": 10,\n      "csModifier": -1');

// 231: maxRounds: 4, maxRoundsTargetId: "203", escapeRound: 2
c = c.replace(/"name":\s*"LE SAGE ET LE VOLEUR",\s*\r?\n\s*"combatSkill":\s*15,\s*\r?\n\s*"endurance":\s*24/g,
  '"name": "LE SAGE ET LE VOLEUR",\n      "combatSkill": 15,\n      "endurance": 24,\n      "maxRounds": 4,\n      "maxRoundsTargetId": "203",\n      "escapeRound": 2');
c = c.replace(/"text":\s*"Vous avez le droit de prendre la fuite après avoir livré deux assauts au moins. Vous filerez alors par la porte de la boutique et vous courrez jusqu'à la grand-rue en vous rendant au 7.",\s*\r?\n\s*"targetId":\s*"7"/g,
  '"text": "Vous avez le droit de prendre la fuite après avoir livré deux assauts au moins. Vous filerez alors par la porte de la boutique et vous courrez jusqu\'à la grand-rue en vous rendant au 7.",\n        "targetId": "7",\n        "isFlee": true');

// 237: permanentCsLoss: 1
c = c.replace(/"id":\s*"237",\s*\r?\n\s*"location":\s*"city",\s*\r?\n\s*"text":/g,
  '"id": "237",\n    "location": "city",\n    "permanentCsLoss": 1,\n    "text":');

// 255: mindblastImmune: true
c = c.replace(/"name":\s*"GOURGAZ",\s*\r?\n\s*"combatSkill":\s*20,\s*\r?\n\s*"endurance":\s*30/g,
  '"name": "GOURGAZ",\n      "combatSkill": 20,\n      "endurance": 30,\n      "mindblastImmune": true');

// 274: loseAllWeapons: true
c = c.replace(/"id":\s*"274",\s*\r?\n\s*"location":\s*"forest",\s*\r?\n\s*"text":/g,
  '"id": "274",\n    "location": "forest",\n    "loseAllWeapons": true,\n    "text":');

// 281: firstRoundCsModifier: 2, hasMindblast: true
c = c.replace(/"name":\s*"VORDAC",\s*\r?\n\s*"combatSkill":\s*17,\s*\r?\n\s*"endurance":\s*25/g,
  '"name": "VORDAC",\n      "combatSkill": 17,\n      "endurance": 25,\n      "firstRoundCsModifier": 2,\n      "hasMindblast": true');

// 338: maxRounds: 4, maxRoundsTargetId: "203", escapeRound: 0
c = c.replace(/"name":\s*"LE SAGE MAGICIEN",\s*\r?\n\s*"combatSkill":\s*13,\s*\r?\n\s*"endurance":\s*20/g,
  '"name": "LE SAGE MAGICIEN",\n      "combatSkill": 13,\n      "endurance": 20,\n      "maxRounds": 4,\n      "maxRoundsTargetId": "203",\n      "escapeRound": 0');
c = c.replace(/"text":\s*"Vous avez le droit de prendre la fuite à tout moment en quittant la boutique pour rejoindre la grand-rue. Rendez-vous pour cela au 7.",\s*\r?\n\s*"targetId":\s*"7"/g,
  '"text": "Vous avez le droit de prendre la fuite à tout moment en quittant la boutique pour rejoindre la grand-rue. Rendez-vous pour cela au 7.",\n        "targetId": "7",\n        "isFlee": true');

fs.writeFileSync('src/data/story.ts', c);
console.log("Updated story rules.");
