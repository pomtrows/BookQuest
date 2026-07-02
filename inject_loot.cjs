const fs = require('fs');

const storyFile = 'src/data/story.ts';
let content = fs.readFileSync(storyFile, 'utf8');

const loots = {
  "15": `"loot": { "weapons": ["Épée"] },\n    `,
  "33": `"loot": { "gold": 3 },\n    `,
  "62": `"loot": { "gold": 28, "meals": 3, "weapons": ["Épée"] },\n    `,
  "94": `"loot": { "gold": 16 },\n    `,
  "124": `"loot": { "gold": 15, "specialItems": ["Clé d'Argent"] },\n    `,
  "137": `"loot": { "items": ["20 Pierres Précieuses"] },\n    `,
  "164": `"loot": { "specialItems": ["Essence d'Alether"] },\n    `,
  "184": `"loot": { "gold": 40, "meals": 4, "weapons": ["Épée"] },\n    `,
  "243": `"loot": { "weapons": ["Masse d'Armes"] },\n    `,
  "263": `"loot": { "gold": 3 },\n    `,
  "267": `"loot": { "items": ["Message de Kraan"], "weapons": ["Poignard"] },\n    `,
  "290": `"loot": { "weapons": ["Bâton"] },\n    `,
  "291": `"loot": { "gold": 6, "weapons": ["Poignard", "Lance"] },\n    `,
  "305": `"loot": { "weapons": ["Lance de Glok"] },\n    `,
  "307": `"loot": { "meals": 1, "weapons": ["Marteau de Guerre"] },\n    `,
  "315": `"loot": { "gold": 6, "items": ["Savon Parfumé"] },\n    `,
  "319": `"loot": { "gold": 20, "weapons": ["Poignard"] },\n    `
};

for (const [id, lootStr] of Object.entries(loots)) {
  // Find the exact location of `"id": "XYZ",` and insert loot after location or id
  const regex = new RegExp(`("id":\\s*"${id}",\\s*\\n\\s*"location":\\s*"[^"]+",\\s*\\n\\s*)`);
  content = content.replace(regex, `$1${lootStr}`);
}

fs.writeFileSync(storyFile, content, 'utf8');
console.log("Injected loots into story.ts");
