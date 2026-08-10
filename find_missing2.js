import fs from 'fs';
const content = fs.readFileSync('src/data/book2.ts', 'utf-8');
const sectionsMatch = content.match(/"(\d+)"\s*:\s*\{[\s\S]*?"id"\s*:\s*"\1"([\s\S]*?)(?:,\s*"choices"|\s*\})/g);
if (sectionsMatch) {
  let missing = [];
  sectionsMatch.forEach(section => {
    const idMatch = section.match(/"id"\s*:\s*"(\d+)"/);
    if (idMatch) {
      const id = idMatch[1];
      if (!section.includes('"image"')) {
        missing.push(id);
      }
    }
  });
  console.log("Missing images for sections: " + missing.join(', '));
} else {
  console.log("No sections found.");
}
