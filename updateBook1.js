import fs from 'fs';

const path = 'src/data/book1.ts';
let content = fs.readFileSync(path, 'utf-8');

const regex = /("113": \{[\s\S]*?"text": \[\s*"Vous avez marché[^\]]+\])(,)(\s*"choices":)/;

const match = content.match(regex);
if (match) {
    const replacement = `$1,\n    "loot": { "items": ["Dose de Laumspur", "Dose de Laumspur"] }$2$3`;
    content = content.replace(regex, replacement);
    fs.writeFileSync(path, content, 'utf-8');
    console.log("Updated successfully");
} else {
    console.log("Not matched");
}
