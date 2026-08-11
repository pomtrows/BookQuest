const fs = require('fs');

function checkBook(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  let missing = [];
  
  const bookRegex = /"(\d+)":\s*(\{[\s\S]*?)(?=\n\s*"\d+":|\n\s*\};)/g;
  let match;
  
  const lootKeywords = /pièce d'or|pièces d'or|couronnes|sabre|glaive|hache|poignard|épée|masse d'armes|lance|marteau|gourdin|sac à dos|potion|objet spécial|repas/i;
  const actionKeywords = /trouvez|prenez|ramassez|porteur|découvrez|approprier|donne|offre|recevez/i;
  
  while ((match = bookRegex.exec(content)) !== null) {
    const id = match[1];
    const dataStr = match[2];
    
    // Check if it has a loot object
    if (!/"loot"\s*:/i.test(dataStr)) {
        // If no loot, check if text suggests there should be one
        const textMatch = dataStr.match(/"text"\s*:\s*\[([\s\S]*?)\]/);
        if (textMatch) {
            const text = textMatch[1];
            if (lootKeywords.test(text) && actionKeywords.test(text)) {
                // To avoid too many false positives, let's just log the section ID and a snippet
                missing.push({ id, snippet: text.substring(0, 100).replace(/\n/g, " ") + "..." });
            }
        }
    }
  }
  console.log(`\n=== Potential missing loot in ${filename} ===`);
  missing.forEach(m => console.log(`Section ${m.id}: ${m.snippet}`));
}

checkBook('src/data/book1.ts');
checkBook('src/data/book2.ts');
