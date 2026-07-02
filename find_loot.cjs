const fs = require('fs');

const storyFile = 'src/data/story.ts';
const content = fs.readFileSync(storyFile, 'utf8');

// A very basic way to find sections without 'loot' that might have items
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
        foundSections.push({id, match: keyword.source, textSnippet: sectionContent.substring(sectionContent.indexOf('"text":'), sectionContent.indexOf('"text":') + 150)});
        break; // Only record once per section
      }
    }
  }
}

console.log("Sections with possible loot:", foundSections.length);
foundSections.forEach(s => {
  console.log(`\n=== Section ${s.id} ===`);
  // Extract text safely
  const match = s.textSnippet.match(/"text":\s*(\[[\s\S]*?\]|".*?")/);
  if (match) {
    console.log(match[1].substring(0, 400));
  } else {
    console.log(s.textSnippet.substring(0, 400));
  }
});
