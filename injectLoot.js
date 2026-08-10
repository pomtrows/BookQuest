import fs from 'fs';

const missingData = {
    "10": { items: ["Billet"] },
    "91": { 
        items: ["Couverture", "10 Pièces d'Or", "Repas"], weapons: ["Bâton", "Épée", "Lance"] 
    },
    "103": { items: ["Dose de Laumspur"] },
    "106": { weapons: ["Lance Magique"] },
    "124": { gold: 42, weapons: ["Sabre", "Poignard"] },
    "187": { gold: 6, weapons: ["Lance", "Lance", "Epée", "Epée"] },
    "220": { items: ["Potion de Gallowbrush", "Parchemin en langue Glok"] },
    "231": { gold: 5, weapons: ["Poignard"], items: ["Sceau d'Hammardal"] },
    "262": { gold: 6, weapons: ["Épée", "Masse d'Armes", "Bâton"], items: ["Repas complet", "Fiole de liquide orange"] },
    "274": { gold: 6, weapons: ["Épée", "Masse d'Armes"] },
    "301": { gold: 3, weapons: ["Poignard", "Poignard", "Poignard", "Sabre"] },
    "302": { gold: 12, weapons: ["Masse d'Armes", "Glaive", "Bâton"], items: ["Potion de Guérison", "Repas", "Repas", "Repas", "Sac à Dos"] },
    "320": {
        items: ["Parchemin Glok", "Bloc d'obsidienne"], weapons: ["Poignard de la Nuit"]
    },
    "331": { gold: 3, weapons: ["Epée", "Poignard"] }
};

const path = 'src/data/book2.ts';
let content = fs.readFileSync(path, 'utf-8');

let modifiedCount = 0;

for (const [sectionId, lootData] of Object.entries(missingData)) {
    const regexStr = `("${sectionId}": \\{[\\s\\S]*?"text": \\[[\\s\\S]*?\\])(,)(\\s*"choices":)`;
    const regex = new RegExp(regexStr);

    if (regex.test(content)) {
        const replacement = `$1,\n    "loot": ${JSON.stringify(lootData)}$2$3`;
        content = content.replace(regex, replacement);
        modifiedCount++;
    } else {
        const noChoicesRegexStr = `("${sectionId}": \\{[\\s\\S]*?"text": \\[[\\s\\S]*?\\])(\\s*\\})`;
        const noChoicesRegex = new RegExp(noChoicesRegexStr);
        if (noChoicesRegex.test(content)) {
            const replacement = `$1,\n    "loot": ${JSON.stringify(lootData)}\n  }`;
            content = content.replace(noChoicesRegex, replacement);
            modifiedCount++;
        } else {
            console.log(`Failed to inject into section ${sectionId}`);
        }
    }
}

fs.writeFileSync(path, content, 'utf-8');
console.log(`Updated ${modifiedCount} sections successfully.`);
