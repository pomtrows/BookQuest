import fs from 'fs';

function extractSections(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const sections = {};
    const sectionRegex = /"(\d+)":\s*\{([\s\S]*?"text":\s*\[[\s\S]*?\][\s\S]*?)\}(?=\s*,\s*"\d+":|\s*\n\s*\})/g;
    
    let match;
    while ((match = sectionRegex.exec(content)) !== null) {
        sections[match[1]] = match[2];
    }
    return sections;
}

function findMissing(filePath) {
    console.log(`\n=== Analyzing ${filePath} ===`);
    const sections = extractSections(filePath);
    
    const keywords = [
        /trouvez\s+(?:un|une|des|\d+)/i,
        /prenez\s+(?:un|une|des|\d+)/i,
        /recevez\s+(?:un|une|des|\d+)/i,
        /ramassez\s+(?:un|une|des|\d+)/i,
        /donne\s+(?:un|une|des|\d+)/i,
        /offre\s+(?:un|une|des|\d+)/i,
        /inscrivez[\s\S]{0,80}feuille/i,
        /ajoutez[\s\S]{0,80}feuille/i,
        /empochez/i,
        /glissez[\s\S]{0,30}sac/i,
        /découvrez/i
    ];

    const results = [];
    for (const [id, sectionContent] of Object.entries(sections)) {
        const textMatch = sectionContent.match(/"text":\s*\[([\s\S]*?)\]/);
        if (!textMatch) continue;
        const text = textMatch[1];
        
        const hasLoot = sectionContent.includes('"loot"');
        const hasGold = sectionContent.includes('"gold"');
        const hasItems = sectionContent.includes('"items"');
        const hasWeapons = sectionContent.includes('"weapons"');

        if (!hasLoot && !hasGold && !hasItems && !hasWeapons) {
            let match = false;
            for (const kw of keywords) {
                if (kw.test(text)) {
                    // Filter common false positives
                    if (!/si\s+vous/i.test(text.substring(text.search(kw)-15, text.search(kw)))) {
                        match = true;
                        break;
                    }
                }
            }
            if (match) {
                results.push({ id, text: text.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ') });
            }
        }
    }
    
    for (const r of results) {
        console.log(`\n[Section ${r.id}]`);
        console.log(r.text.substring(0, 500));
    }
    console.log(`\nTotal: ${results.length}`);
}

findMissing('src/data/book1.ts');
findMissing('src/data/book2.ts');
