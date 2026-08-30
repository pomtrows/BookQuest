const fs = require('fs');
const path = require('path');

const srcDataDir = path.resolve(__dirname, '../../../../src/data');

function enrichBookMechanics(bookNumber) {
  const filePath = path.join(srcDataDir, `book${bookNumber}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier introuvable : ${filePath}`);
    return;
  }

  console.log(`\n⚙️ Enrichissement des règles & mécaniques du Livre ${bookNumber}...`);
  const content = fs.readFileSync(filePath, 'utf8');

  // Matcher l'objet JSON
  const matchObj = content.match(/export const storyDataBook\d+:\s*Record<string,\s*Section>\s*=\s*(\{[\s\S]*\});?\s*$/);
  if (!matchObj) {
    console.error('❌ Impossible de parser la structure de storyDataBook');
    return;
  }

  const sections = JSON.parse(matchObj[1]);
  let combatCount = 0;
  let lootCount = 0;
  let damageCount = 0;
  let conditionCount = 0;

  for (const [id, section] of Object.entries(sections)) {
    const textJoined = (section.text || []).join(' ');

    // 1. Détection des Combats
    // Ex: "HABILETÉ : 18 ENDURANCE : 30" ou "HABILETÉ: 17 ENDURANCE: 25"
    const combatRegex = /([A-ZÀ-ÿ\s'-]+?)\s*HABILET[EÉ]\s*:\s*(\d+)\s*ENDURANCE\s*:\s*(\d+)/i;
    const cMatch = textJoined.match(combatRegex);
    if (cMatch && !section.combat) {
      let enemyName = cMatch[1].trim()
        .replace(/^(Il vous faut combattre|Vous devez affronter|Vous affrontez|Combattez|le|la|les|un|une)\s+/i, '')
        .replace(/[\n\r]/g, ' ')
        .trim();
      
      // Si le nom est trop long, prendre les derniers mots
      if (enemyName.length > 30) {
        const words = enemyName.split(' ');
        enemyName = words.slice(-3).join(' ');
      }

      const cs = parseInt(cMatch[2], 10);
      const end = parseInt(cMatch[3], 10);

      section.combat = {
        name: enemyName.toUpperCase() || 'ENNEMI',
        combatSkill: cs,
        endurance: end,
        mindblastImmune: /immunis[eé]|insensible.*puissance psychique/i.test(textJoined),
        undead: /mort-vivant|squelette|fant[oô]me|spectre|zombie/i.test(textJoined)
      };
      combatCount++;
    }

    // 2. Détection des Dégâts directs
    // Ex: "vous perdez 3 points d'ENDURANCE"
    const damageRegex = /vous perdez\s*(\d+)\s*points?\s*d['’]ENDURANCE/i;
    const dMatch = textJoined.match(damageRegex);
    if (dMatch && !section.damage) {
      section.damage = parseInt(dMatch[1], 10);
      damageCount++;
    }

    // 3. Détection des Soins
    const healRegex = /vous (?:récupérez|gagnez)\s*(\d+)\s*points?\s*d['’]ENDURANCE/i;
    const hMatch = textJoined.match(healRegex);
    if (hMatch && !section.heal) {
      section.heal = parseInt(hMatch[1], 10);
    }

    // 4. Détection des Loots
    // Ex: "4 Pièces d'Or", "Poignard", "Potion de Guérison", "Repas"
    const goldRegex = /(\d+)\s*Pi[eè]ces?\s*d['’]Or/i;
    const gMatch = textJoined.match(goldRegex);
    const hasLootContext = /trouvez|ramassez|d[eé]couvrez|fouille|prenez|emportez/i.test(textJoined);

    if (hasLootContext && gMatch && !section.loot) {
      section.loot = {
        gold: parseInt(gMatch[1], 10)
      };
      lootCount++;
    }

    // 5. Détection des Disciplines requises dans les Choix
    if (section.choices && section.choices.length > 0) {
      const disciplines = [
        'Camouflage', 'Chasse', 'Sixième Sens', 'Orientation', 'Guérison',
        'Maîtrise des Armes', 'Bouclier Psychique', 'Puissance Psychique',
        'Communication Animale', 'Maîtrise Psychique de la Matière'
      ];

      section.choices.forEach(choice => {
        for (const disc of disciplines) {
          const regex = new RegExp(`(?:poss[eé]dez|ma[iî]trisez|utilisez|Discipline.*?)?\\b${disc}\\b`, 'i');
          if (regex.test(choice.text) && !choice.requiredDiscipline) {
            choice.requiredDiscipline = disc;
            conditionCount++;
            break;
          }
        }
      });
    }
  }

  console.log(`✅ Enrichissement terminé :`);
  console.log(`   • ${combatCount} combat(s) typé(s)`);
  console.log(`   • ${lootCount} loot(s) d'or/objets`);
  console.log(`   • ${damageCount} section(s) avec dégâts d'endurance`);
  console.log(`   • ${conditionCount} condition(s) de discipline Kaï ajoutée(s)`);

  const updatedTs = `import type { Section } from '../types/game';\n\nexport const storyDataBook${bookNumber}: Record<string, Section> = ${JSON.stringify(sections, null, 2)};\n`;
  fs.writeFileSync(filePath, updatedTs, 'utf8');
  console.log(`💾 Fichier mis à jour : ${filePath}`);
}

const bookArg = process.argv[2] || '3';
enrichBookMechanics(bookArg.replace('book', ''));
