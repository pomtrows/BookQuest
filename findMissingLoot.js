import fs from 'fs';

function findPotentialMissingLoot(filePath) {
    console.log(`\n--- Analysing ${filePath} ---`);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Quick regex to extract sections
    const sectionRegex = /"(\d+)":\s*\{([^}]*?"text":\s*\[[^\]]+\][^}]*)\}/g;
    let match;
    const keywords = [
        /vous\s+(?:trouvez|ramassez|découvrez|prenez|recevez|gagnez|récupérez)/i,
        /(?:donne|offre)\s+(?:une|un|des|\d+)/i,
        /glissez\s+dans\s+votre\s+sac/i,
        /empochez/i,
        /inscrivez[\s\S]{0,100}feuille\s+d'aventure/i, // inscrivez sur votre feuille d'aventure
        /couronne(?:s)?\s+d'or/i,
        /pièce(?:s)?\s+d'or/i,
        /potion/i,
        /glaive|épée|poignard|lance|masse|hache|bâton/i,
        /repas/i,
        /laumspur/i,
        /clé/i
    ];

    const results = [];

    while ((match = sectionRegex.exec(content)) !== null) {
        const id = match[1];
        const sectionContent = match[2];
        
        // Extract text array
        const textMatch = sectionContent.match(/"text":\s*\[([\s\S]*?)\]/);
        if (!textMatch) continue;
        const text = textMatch[1];

        // Check if there's already loot
        const hasLoot = sectionContent.includes('"loot"');
        const hasGold = sectionContent.includes('"gold"');
        const hasItems = sectionContent.includes('"items"');
        const hasWeapons = sectionContent.includes('"weapons"');

        if (!hasLoot && !hasGold && !hasItems && !hasWeapons) {
            let matchesKeyword = false;
            let matchedText = '';

            // Check if text suggests gaining something
            if (
                (/trouvez\s+(?:un|une|des|\d+)/i.test(text) || 
                 /prenez\s+(?:un|une|des|\d+)/i.test(text) ||
                 /recevez\s+(?:un|une|des|\d+)/i.test(text) ||
                 /ramassez\s+(?:un|une|des|\d+)/i.test(text) ||
                 /vous\s+donne\s+(?:un|une|des|\d+)/i.test(text) ||
                 /inscrivez[\s\S]{0,50}feuille/i.test(text) ||
                 /ajoutez[\s\S]{0,50}feuille/i.test(text))
            ) {
                // Ignore negative contexts like "Si vous trouvez"
                if (!/si\s+vous\s+(?:trouvez|avez|possédez)/i.test(text)) {
                    results.push({ id, text: text.substring(0, 200).replace(/\n/g, ' ') + '...' });
                }
            }
        }
    }

    console.log(`Found ${results.length} potential sections missing loot definitions.`);
    for (const r of results.slice(0, 15)) {
        console.log(`Section ${r.id}: ${r.text}`);
    }
}

findPotentialMissingLoot('src/data/book1.ts');
findPotentialMissingLoot('src/data/book2.ts');
