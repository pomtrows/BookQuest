const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// Racine du projet
const projectRoot = path.resolve(__dirname, '../../../../');
const srcDataDir = path.join(projectRoot, 'src/data');

/**
 * Nettoie et aère un ensemble de lignes en paragraphes fluides
 */
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

/**
 * Extrait les choix interactifs depuis les paragraphes
 */
function extractChoices(paragraphs) {
  const choices = [];
  const fullText = paragraphs.join(' ');

  const choicePattern = /(?:Si vous[^.]*?|Dans le cas contraire[^.]*?|Sinon[^.]*?|Enfin[^.]*?|Entre \d+ et \d+[^.]*?|Si le chiffre[^.]*?)?rendez[\s-]vous (?:au|à la section|au paragraphe)\s*(\d+)[^.]*?\./gi;
  
  let match;
  while ((match = choicePattern.exec(fullText)) !== null) {
    const fullChoiceText = match[0].trim();
    const targetId = match[1];
    
    if (!choices.some(c => c.targetId === targetId && c.text === fullChoiceText)) {
      choices.push({
        text: fullChoiceText,
        targetId: targetId
      });
    }
  }

  if (choices.length === 0) {
    const fallbackPattern = /rendez[\s-]vous (?:au|à la section)\s*(\d+)/gi;
    let fbMatch;
    while ((fbMatch = fallbackPattern.exec(fullText)) !== null) {
      const targetId = fbMatch[1];
      if (!choices.some(c => c.targetId === targetId)) {
        choices.push({
          text: `Rendez-vous au ${targetId}.`,
          targetId: targetId
        });
      }
    }
  }

  return choices;
}

/**
 * Convertit un EPUB en fichier TypeScript book<N>.ts
 */
function buildBookTs(epubPath, bookNumber) {
  console.log(`\n📖 Intégration du Livre ${bookNumber} depuis : ${epubPath} ...`);
  const zip = new AdmZip(epubPath);
  const htmlFiles = zip.getEntries()
    .filter(e => e.entryName.includes('.htm') || e.entryName.includes('.xhtml'))
    .map(e => e.entryName);
  
  htmlFiles.sort();

  let allHtml = '';
  for (const hf of htmlFiles) {
    allHtml += '\n' + zip.readAsText(hf);
  }

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
      const num = parseInt(line, 10);
      sectionIndices.push({ num, lineIndex: i });
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

  console.log(`✨ ${totalExtracted} sections extraites et aérées avec succès.`);

  const tsContent = `import type { Section } from '../types/game';\n\nexport const storyDataBook${bookNumber}: Record<string, Section> = ${JSON.stringify(sectionsObj, null, 2)};\n`;

  const outputPath = path.join(srcDataDir, `book${bookNumber}.ts`);
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`💾 Fichier généré avec succès : ${outputPath}`);

  return { totalExtracted, maxSection: Math.max(...Object.keys(sectionsObj).map(n => parseInt(n, 10))) };
}

const epubArg = process.argv[2];
const bookNumArg = process.argv[3] || '3';

if (!epubArg) {
  console.log('Usage: node build_book_from_epub.cjs <chemin_epub> <numero_livre>');
  process.exit(1);
}

buildBookTs(path.resolve(epubArg), bookNumArg);
