const fs = require('fs');

const storyFile = 'src/data/story.ts';
const content = fs.readFileSync(storyFile, 'utf8');

const sectionRegex = /"(\d+)":\s*\{(.*?)\}(?=\s*,\s*"\d+":|\s*$)/gs;
let match;

const lootKeywords = [
  /trouvez.*?(pièces|couronnes|repas|sac|arme|épée|poignard|hache|masse|potion|talisman)/i,
  /inscri.*?feuille d'aventure/i,
  /prenez.*?(pièces|couronnes|repas|sac|arme|épée|poignard|hache|masse|potion|talisman)/i,
  /découvrez.*?(pièces|couronnes|repas|sac|arme|épée|poignard|hache|masse|potion|talisman)/i,
  /donne.*?(pièces|couronnes|repas|sac|arme|épée|poignard|hache|masse|potion|talisman)/i
];

const foundSections = [];

while ((match = sectionRegex.exec(content)) !== null) {
  const id = match[1];
  const sectionContent = match[2];
  
  if (!sectionContent.includes('"loot":')) {
    for (const keyword of lootKeywords) {
      if (keyword.test(sectionContent)) {
        foundSections.push({id, text: sectionContent});
        break;
      }
    }
  }
}

fs.writeFileSync('scratch_loot.json', JSON.stringify(foundSections, null, 2));
console.log("Wrote scratch_loot.json");
