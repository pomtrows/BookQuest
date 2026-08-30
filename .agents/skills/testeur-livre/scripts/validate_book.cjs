const fs = require('fs');
const path = require('path');

const srcDataDir = path.resolve(__dirname, '../../../../src/data');

function validateBook(bookNumber) {
  const filePath = path.join(srcDataDir, `book${bookNumber}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier introuvable : ${filePath}`);
    return false;
  }

  console.log(`\n========================================`);
  console.log(`🧪 AUDIT & VALIDATION DU LIVRE ${bookNumber}`);
  console.log(`========================================\n`);

  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Découpage propre par section "id": { ... }
  // On extrait l'objet via une fonction d'évaluation sûre des données
  const sections = {};
  
  // Regex pour attraper chaque section
  const sectionSplitRegex = /\n\s*"([^"]+)":\s*\{/g;
  let matches = [];
  let m;
  while ((m = sectionSplitRegex.exec(fileContent)) !== null) {
    matches.push({ id: m[1], index: m.index });
  }

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const nextIndex = i + 1 < matches.length ? matches[i + 1].index : fileContent.lastIndexOf('};');
    const block = fileContent.substring(current.index, nextIndex);

    // Extraire les cibles de choix
    const choices = [];
    const choiceRegex = /"targetId":\s*"([^"]+)"/g;
    let c;
    while ((c = choiceRegex.exec(block)) !== null) {
      choices.push(c[1]);
    }

    const hasCombat = /"combat":\s*\{/.test(block);
    const hasLoot = /"loot":\s*\{/.test(block);
    const hasDamage = /"damage":\s*\d+/.test(block);
    const hasImage = /"image":\s*"([^"]+)"/.test(block);
    const isDeath = /mort|qu[eê]te s'ach[eè]ve|vie s'ach[eè]ve|vous mourez/i.test(block);

    sections[current.id] = {
      id: current.id,
      choices,
      hasCombat,
      hasLoot,
      hasDamage,
      hasImage,
      isDeath
    };
  }

  const allIds = Object.keys(sections);
  const numericIds = allIds.map(id => parseInt(id, 10)).filter(n => !isNaN(n));
  const maxSection = numericIds.length > 0 ? Math.max(...numericIds) : 0;
  const minSection = numericIds.length > 0 ? Math.min(...numericIds) : 0;

  console.log(`📊 Statistiques générales :`);
  console.log(`   • Nombre total de sections détectées : ${allIds.length}`);
  console.log(`   • Plage de numérotation : ${minSection} à ${maxSection}`);
  console.log(`   • Sections avec combat : ${Object.values(sections).filter(s => s.hasCombat).length}`);
  console.log(`   • Sections avec butin/loot : ${Object.values(sections).filter(s => s.hasLoot).length}`);
  console.log(`   • Sections avec dégâts directs : ${Object.values(sections).filter(s => s.hasDamage).length}`);
  console.log(`   • Sections illustrées : ${Object.values(sections).filter(s => s.hasImage).length}/${allIds.length}`);

  let errorCount = 0;

  console.log(`\n🔍 1. Vérification des liens brisés (Dead links)...`);
  const brokenLinks = [];
  Object.values(sections).forEach(sect => {
    sect.choices.forEach(target => {
      if (!sections[target]) {
        brokenLinks.push(`Section ${sect.id} -> Cible inexistante "${target}"`);
        errorCount++;
      }
    });
  });

  if (brokenLinks.length === 0) {
    console.log(`   ✅ Aucun lien brisé ! Tous les choix mènent à des sections valides.`);
  } else {
    console.log(`   ❌ ${brokenLinks.length} lien(s) brisé(s) détecté(s) :`);
    brokenLinks.slice(0, 10).forEach(l => console.log(`      • ${l}`));
    if (brokenLinks.length > 10) console.log(`      ... et ${brokenLinks.length - 10} autres.`);
  }

  console.log(`\n🔍 2. Analyse d'accessibilité depuis le départ (Graphe orienté)...`);
  const visited = new Set();
  const queue = ['1'];
  if (sections['intro']) queue.push('intro');
  if (sections['prologue']) queue.push('prologue');

  while (queue.length > 0) {
    const curr = queue.shift();
    if (visited.has(curr)) continue;
    visited.add(curr);

    const sect = sections[curr];
    if (sect) {
      sect.choices.forEach(target => {
        if (!visited.has(target) && sections[target]) {
          queue.push(target);
        }
      });
    }
  }

  const unreached = allIds.filter(id => !visited.has(id));
  const reachabilityPct = Math.round((visited.size / allIds.length) * 100);
  console.log(`   • Sections atteignables depuis le départ : ${visited.size}/${allIds.length} (${reachabilityPct}%)`);
  if (unreached.length > 0) {
    console.log(`   ℹ️ ${unreached.length} section(s) non reliées au chemin direct : ${unreached.slice(0, 15).join(', ')}${unreached.length > 15 ? '...' : ''}`);
  }

  console.log(`\n========================================`);
  if (errorCount === 0) {
    console.log(`🎉 SUCCÈS : Le Livre ${bookNumber} est 100% VALIDE et prêt pour le jeu !`);
  } else {
    console.log(`❌ ÉCHEC : ${errorCount} erreur(s) critique(s) doivent être corrigées.`);
  }
  console.log(`========================================\n`);

  return errorCount === 0;
}

const bookArg = process.argv[2] || '1';
if (bookArg === '--all') {
  const files = fs.readdirSync(srcDataDir).filter(f => /^book\d+\.ts$/.test(f));
  files.forEach(f => {
    const num = f.replace('book', '').replace('.ts', '');
    validateBook(num);
  });
} else {
  validateBook(bookArg.replace('book', ''));
}
