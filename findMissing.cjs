const fs = require('fs');
const content = fs.readFileSync('src/data/book2.ts', 'utf-8');

const sections = content.split('  "').slice(1);
const missing = [];

for (const section of sections) {
    const idMatch = section.match(/^([^"]+)": {/);
    if (!idMatch) continue;
    
    const id = idMatch[1];
    if (!section.includes('"image":')) {
        // Also extract some text to use as prompt
        const textMatch = section.match(/"text": \[\s*"([^"]+)"/);
        const text = textMatch ? textMatch[1].substring(0, 150).replace(/\n/g, ' ') : '';
        missing.push({ id, text });
    }
}

fs.writeFileSync('missingImages.json', JSON.stringify(missing, null, 2));
