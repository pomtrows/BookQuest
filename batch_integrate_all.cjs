const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const projectRoot = path.resolve(__dirname);
const epubDir = path.join(projectRoot, 'EPUB');
const srcDataDir = path.join(projectRoot, 'src/data');

// Mapping des fichiers EPUB avec leur vrai numéro de tome et titre
const bookFiles = [
  { file: "Loup Solitaire 03 - La Pierre de la Sagesse.epub", bookNumber: 3, title: "Les Grottes de Kalte" },
  { file: "Loup Solitaire 04 - Le Gouffre Maudit.epub", bookNumber: 4, title: "Le Gouffre Maudit" },
  { file: "Loup Solitaire 05 - Le Tyran du Desert.epub", bookNumber: 5, title: "Le Tyran du Désert" },
  { file: "Loup Solitaire 06 - La Pierre de la Sagesse.epub", bookNumber: 6, title: "La Pierre de la Sagesse" },
  { file: "Loup Solitaire 07 -  La Forteresse Maudite.epub", bookNumber: 7, title: "La Forteresse Maudite" },
  { file: "Loup Solitaire 08 - Dans l'enfer de la Jungle.epub", bookNumber: 8, title: "Dans l'Enfer de la Jungle" },
  { file: "Loup Solitaire 09 - Dans l'enfer de la Jungle.epub", bookNumber: 9, title: "La Métropole de la Peur" },
  { file: "Loup Solitaire 10 - Dans les entrailles de Torgar.epub", bookNumber: 10, title: "Dans les Entrailles de Torgar" },
  { file: "Loup Solitaire 11 - Les Prisonniers du Temps.epub", bookNumber: 11, title: "Les Prisonniers du Temps" },
  { file: "Loup Solitaire 12 - Le crepuscule des Maitres.epub", bookNumber: 12, title: "Le Crépuscule des Maîtres" },
  { file: "Loup Solitaire 13 - Les Druides de Cener.epub", bookNumber: 13, title: "Les Druides de Cener" },
  { file: "Loup Solitaire 14 - Le Captif du Roi-Sorcier.epub", bookNumber: 14, title: "Le Captif du Roi-Sorcier" },
  { file: "Loup Solitaire 15 - La Croisade du Désespoir.epub", bookNumber: 15, title: "La Croisade du Désespoir" },
  { file: "Loup Solitaire 16 - L'Heritage de Vashna.epub", bookNumber: 16, title: "L'Héritage de Vashna" },
  { file: "Loup Solitaire 17 - La Tour de Cristal.epub", bookNumber: 17, title: "La Tour de Cristal" },
  { file: "Loup Solitaire 18 - La Porte d'ombre.epub", bookNumber: 18, title: "La Porte d'Ombre" },
  { file: "Loup Solitaire 19 - Le Combat des Loups.epub", bookNumber: 19, title: "Le Combat des Loups" },
  { file: "Loup Solitaire 20 - La malediction de Naar.epub", bookNumber: 20, title: "La Malédiction de Naar" },
  { file: "Loup Solitaire 21 - Le Voyage de la Pierre de Lune.epub", bookNumber: 21, title: "Le Voyage de la Pierre de Lune" },
  { file: "Loup Solitaire 22 - Les Pirates de Shadaki.epub", bookNumber: 22, title: "Les Pirates de Shadaki" },
  { file: "Loup Solitaire 23 - Le Heros de Mynuit.epub", bookNumber: 23, title: "Le Héros de Mynuit" },
  { file: "Loup Solitaire 24 - La Guerre des Runes.epub", bookNumber: 24, title: "La Guerre des Runes" },
  { file: "Loup Solitaire 25 - Sur la Piste du Loup.epub", bookNumber: 25, title: "Sur la Piste du Loup" },
  { file: "Loup Solitaire 26 - Le Demon des Profondeurs.epub", bookNumber: 26, title: "Le Démon des Profondeurs" },
  { file: "Loup Solitaire 27 - al Griffe du Vampire.epub", bookNumber: 27, title: "La Griffe du Vampire" },
  { file: "Loup Solitaire 28 - La Cite de l'Empereur.epub", bookNumber: 28, title: "La Cité de l'Empereur" }
];

function cleanAndParagraph(lines) {
  let fullText = lines
    .map(l => l.replace(/\s+/g, ' ').trim())
    .filter(l => l.length > 0)
    .join(' ');

  fullText = fullText
    .replace(/@page\s*\{[^}]*\}/gi, '')
    .replace(/body\s*\{[^}]*\}/gi, '')
    .replace(/Cover/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const sentences = fullText.split(/(?<=\.|\?|\!|»)\s+(?=[A-Z«ÉÈÀÇÎÔÛ])/g);
  const paragraphs = [];
  let currentPara = '';

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    const isChoice = /^Si vous|Dans le cas contraire|Si le chiffre|Rendez-vous|Utilisez la Table/i.test(trimmed);
    const isDialogue = /^«/.test(trimmed);

    if (currentPara.length > 0 && (isChoice || isDialogue || currentPara.length > 250)) {
      paragraphs.push(currentPara.trim());
      currentPara = trimmed;
    } else {
      currentPara = currentPara ? `${currentPara} ${trimmed}` : trimmed;
    }
  }

  if (currentPara.trim().length > 0) {
    paragraphs.push(currentPara.trim());
  }

  return paragraphs.length > 0 ? paragraphs : [fullText];
}

function extractChoices(paragraphs) {
  const choices = [];
  const fullText = paragraphs.join(' ');

  const choicePattern = /(?:Si vous[^.]*?|Dans le cas contraire[^.]*?|Sinon[^.]*?|Enfin[^.]*?|Entre \d+ et \d+[^.]*?|Si le chiffre[^.]*?)?rendez[\s-]vous (?:au|à la section|au paragraphe)\s*(\d+)[^.]*?\./gi;
  let match;
  while ((match = choicePattern.exec(fullText)) !== null) {
    const fullChoiceText = match[0].trim();
    const targetId = match[1];
    if (!choices.some(c => c.targetId === targetId && c.text === fullChoiceText)) {
      choices.push({ text: fullChoiceText, targetId });
    }
  }

  if (choices.length === 0) {
    const fallbackPattern = /rendez[\s-]vous (?:au|à la section)\s*(\d+)/gi;
    let fbMatch;
    while ((fbMatch = fallbackPattern.exec(fullText)) !== null) {
      const targetId = fbMatch[1];
      if (!choices.some(c => c.targetId === targetId)) {
        choices.push({ text: `Rendez-vous au ${targetId}.`, targetId });
      }
    }
  }

  return choices;
}

function enrichMechanics(sections) {
  const disciplines = [
    'Camouflage', 'Chasse', 'Sixième Sens', 'Orientation', 'Guérison',
    'Maîtrise des Armes', 'Bouclier Psychique', 'Puissance Psychique',
    'Communication Animale', 'Maîtrise Psychique de la Matière',
    'Invisibilité', 'Art de la Chasse', 'Pistage', 'Flegme', 'Magie Kaï',
    'Intuition', 'Télépathie', 'Survie', 'Exploration', 'Science des Armes'
  ];

  for (const [id, section] of Object.entries(sections)) {
    const textJoined = (section.text || []).join(' ');

    // 1. Combats
    const combatRegex = /([A-ZÀ-ÿ\s'-]+?)\s*HABILET[EÉ]\s*:\s*(\d+)\s*ENDURANCE\s*:\s*(\d+)/i;
    const cMatch = textJoined.match(combatRegex);
    if (cMatch && !section.combat) {
      let enemyName = cMatch[1].trim()
        .replace(/^(Il vous faut combattre|Vous devez affronter|Vous affrontez|Combattez|le|la|les|un|une)\s+/i, '')
        .replace(/[\n\r]/g, ' ')
        .trim();
      if (enemyName.length > 30) enemyName = enemyName.split(' ').slice(-3).join(' ');

      section.combat = {
        name: enemyName.toUpperCase() || 'ENNEMI',
        combatSkill: parseInt(cMatch[2], 10),
        endurance: parseInt(cMatch[3], 10),
        mindblastImmune: /immunis[eé]|insensible.*puissance psychique/i.test(textJoined),
        undead: /mort-vivant|squelette|fant[oô]me|spectre|zombie/i.test(textJoined)
      };
    }

    // 2. Dégâts directs
    const damageRegex = /vous perdez\s*(\d+)\s*points?\s*d['’]ENDURANCE/i;
    const dMatch = textJoined.match(damageRegex);
    if (dMatch && !section.damage) section.damage = parseInt(dMatch[1], 10);

    // 3. Soins
    const healRegex = /vous (?:récupérez|gagnez)\s*(\d+)\s*points?\s*d['’]ENDURANCE/i;
    const hMatch = textJoined.match(healRegex);
    if (hMatch && !section.heal) section.heal = parseInt(hMatch[1], 10);

    // 4. Loot d'or
    const goldRegex = /(\d+)\s*Pi[eè]ces?\s*d['’]Or/i;
    const gMatch = textJoined.match(goldRegex);
    if (/trouvez|ramassez|d[eé]couvrez|fouille|prenez|emportez/i.test(textJoined) && gMatch && !section.loot) {
      section.loot = { gold: parseInt(gMatch[1], 10) };
    }

    // 5. Conditions de disciplines
    if (section.choices) {
      section.choices.forEach(choice => {
        for (const disc of disciplines) {
          const regex = new RegExp(`(?:poss[eé]dez|ma[iî]trisez|utilisez|Discipline.*?)?\\b${disc}\\b`, 'i');
          if (regex.test(choice.text) && !choice.requiredDiscipline) {
            choice.requiredDiscipline = disc;
            break;
          }
        }
      });
    }
  }
}

function processAllBooks() {
  console.log(`🚀 Démarrage de l'intégration globale de tous les tomes de Loup Solitaire...\n`);

  for (const item of bookFiles) {
    const epubPath = path.join(epubDir, item.file);
    if (!fs.existsSync(epubPath)) {
      console.warn(`⚠️ Fichier introuvable : ${epubPath}`);
      continue;
    }

    console.log(`\n📚 [LIVRE ${item.bookNumber}] : ${item.title}`);
    const zip = new AdmZip(epubPath);
    const htmlFiles = zip.getEntries()
      .filter(e => e.entryName.includes('.htm') || e.entryName.includes('.xhtml'))
      .map(e => e.entryName);
    htmlFiles.sort();

    let allHtml = '';
    for (const hf of htmlFiles) allHtml += '\n' + zip.readAsText(hf);

    let text = allHtml
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/div>/gi, '\n')
      .replace(/<\/h\d>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&laquo;/gi, '«')
      .replace(/&raquo;/gi, '»')
      .replace(/&amp;/gi, '&')
      .replace(/&eacute;/gi, 'é')
      .replace(/&egrave;/gi, 'è')
      .replace(/&agrave;/gi, 'à')
      .replace(/&ccedil;/gi, 'ç')
      .replace(/&ecirc;/gi, 'ê')
      .replace(/&ocirc;/gi, 'ô')
      .replace(/&icirc;/gi, 'î')
      .replace(/&ucirc;/gi, 'û')
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code));

    const rawLines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    const sectionIndices = [];
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      if (/^\d{1,4}$/.test(line)) {
        sectionIndices.push({ num: parseInt(line, 10), lineIndex: i });
      }
    }

    const sectionsObj = {};
    let totalExtracted = 0;

    for (let i = 0; i < sectionIndices.length; i++) {
      const curr = sectionIndices[i];
      const nextLineIndex = i + 1 < sectionIndices.length ? sectionIndices[i + 1].lineIndex : rawLines.length;
      const bodyLines = rawLines.slice(curr.lineIndex + 1, nextLineIndex);
      const bodyText = bodyLines.join(' ');

      if (bodyText.length > 15 && !sectionsObj[curr.num]) {
        const paragraphs = cleanAndParagraph(bodyLines);
        const choices = extractChoices(paragraphs);
        sectionsObj[curr.num] = {
          id: String(curr.num),
          text: paragraphs,
          choices: choices
        };
        totalExtracted++;
      }
    }

    // 2. Enrichissement Mécaniques & Règles
    enrichMechanics(sectionsObj);

    // 3. Écriture du fichier TypeScript book<N>.ts
    const tsContent = `import type { Section } from '../types/game';\n\nexport const storyDataBook${item.bookNumber}: Record<string, Section> = ${JSON.stringify(sectionsObj, null, 2)};\n`;
    const targetFile = path.join(srcDataDir, `book${item.bookNumber}.ts`);
    fs.writeFileSync(targetFile, tsContent, 'utf8');

    console.log(`   ✅ ${totalExtracted} sections extraites, aérées et enrichies dans src/data/book${item.bookNumber}.ts`);
  }

  // 4. Mettre à jour src/data/books.ts avec l'ensemble des tomes (1 à 28)
  console.log(`\n📝 Mise à jour du registre global src/data/books.ts ...`);
  let imports = `import { storyData as storyDataBook1 } from './book1';\nimport { storyDataBook2 } from './book2';\n`;
  let recordEntries = `  1: storyDataBook1,\n  2: storyDataBook2,\n`;

  for (let n = 3; n <= 28; n++) {
    const bookFile = path.join(srcDataDir, `book${n}.ts`);
    if (fs.existsSync(bookFile)) {
      imports += `import { storyDataBook${n} } from './book${n}';\n`;
      recordEntries += `  ${n}: storyDataBook${n},\n`;
    }
  }

  const booksTsContent = `${imports}import type { Section } from '../types/game';\n\nexport const booksData: Record<number, Record<string, Section>> = {\n${recordEntries}};\n\nexport const getStoryData = (bookId: number): Record<string, Section> => {\n  return booksData[bookId] || booksData[1];\n};\n`;
  fs.writeFileSync(path.join(srcDataDir, 'books.ts'), booksTsContent, 'utf8');
  console.log(`   ✅ src/data/books.ts mis à jour avec tous les tomes disponibles (1 à 28) !`);

  // 5. Mettre à jour src/data/rules.ts pour supporter dynamiquement tous les tomes
  console.log(`\n📝 Mise à jour de src/data/rules.ts ...`);
  const rulesTsContent = `import { RuleSection, rulesDataBook1, rulesDataBook3 } from './rules';\n`;
  // rules.ts already has getRulesData fallback to general rules
}

processAllBooks();
