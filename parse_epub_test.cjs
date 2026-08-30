const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function parseEpub(epubPath) {
  const zip = new AdmZip(epubPath);
  const htmlFiles = zip.getEntries()
    .filter(e => e.entryName.includes('.htm') || e.entryName.includes('.xhtml'))
    .map(e => e.entryName);
  
  htmlFiles.sort();

  let allHtml = '';
  for (const hf of htmlFiles) {
    allHtml += '\n' + zip.readAsText(hf);
  }

  // Nettoyage de l'HTML vers des lignes de texte
  // Remplacement des balises de paragraphe et br par des sauts de ligne
  let text = allHtml
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/h\d>/gi, '\n')
    .replace(/<[^>]+>/g, '') // Supprimer toutes les balises restantes
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

  // Normaliser les espaces et sauts de ligne
  const rawLines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  console.log(`📄 Lignes brutes extraites : ${rawLines.length}`);

  // Trouver où commencent les sections numérotées
  // Une section est un nombre isolé (1, 2, 3...) sur une ligne
  const sectionIndices = [];
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    if (/^\d{1,4}$/.test(line)) {
      const num = parseInt(line, 10);
      sectionIndices.push({ num, lineIndex: i });
    }
  }

  console.log(`🔍 Numéros de sections isolés repérés : ${sectionIndices.length}`);
  
  // Regrouper par numéro de section unique
  const sectionMap = new Map();
  for (let i = 0; i < sectionIndices.length; i++) {
    const curr = sectionIndices[i];
    // S'assurer qu'il s'agit bien d'une section et non d'un numéro de page
    const nextLineIndex = i + 1 < sectionIndices.length ? sectionIndices[i + 1].lineIndex : rawLines.length;
    const bodyLines = rawLines.slice(curr.lineIndex + 1, nextLineIndex);
    
    // Si le corps contient du texte substantiel, c'est une section
    const bodyText = bodyLines.join(' ');
    if (bodyText.length > 20 && !sectionMap.has(curr.num)) {
      sectionMap.set(curr.num, bodyLines);
    }
  }

  console.log(`✅ Sections valides reconstruites : ${sectionMap.size}`);
  return { sectionMap, rawLines };
}

const epubFile = process.argv[2] || 'EPUB/Loup Solitaire 03 - La Pierre de la Sagesse.epub';
const result = parseEpub(path.resolve(epubFile));
console.log('Exemple Section 1 :');
console.log(result.sectionMap.get(1));
console.log('\nExemple Section 2 :');
console.log(result.sectionMap.get(2));
console.log('\nExemple Section 350 :');
console.log(result.sectionMap.get(350));
