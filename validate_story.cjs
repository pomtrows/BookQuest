const fs = require('fs');

// We have to parse story.ts. Since it's a TS file exporting an object, we can require it if we compile it, or parse it as JSON if we strip the export.
// Actually, it might be easier to use ts-node if installed, or just regex it.
// Let's use a simpler approach: regex or eval. 
// We can strip 'export const storyData: Record<string, Section> = {' and evaluate the rest.

let raw = fs.readFileSync('src/data/story.ts', 'utf-8');

// Replace export statement with module.exports =
raw = raw.replace(/export const storyData.*?\s*=\s*\{/, 'module.exports = {');

// Remove types if any (like 'as any', etc) - might be tricky.
// Let's write a temporary JS file and run it.
fs.writeFileSync('temp_story.js', raw);

try {
  const story = require('./temp_story.js');
  let errors = [];
  let deadEnds = [];
  let unreachable = new Set(Object.keys(story));
  
  unreachable.delete('prologue');
  unreachable.delete('1'); // Starting point usually
  
  for (const [id, section] of Object.entries(story)) {
    if (!section.choices || section.choices.length === 0) {
      if (!section.text.join(' ').toLowerCase().includes('fin') && 
          !section.text.join(' ').toLowerCase().includes('aventure se termine') &&
          !section.text.join(' ').toLowerCase().includes('vous êtes mort')) {
        deadEnds.push(id);
      }
    } else {
      for (const choice of section.choices) {
        if (!story[choice.targetId]) {
          errors.push(`Section ${id} has a choice pointing to non-existent section: ${choice.targetId}`);
        } else {
          unreachable.delete(choice.targetId.toString());
        }
      }
    }
  }
  
  console.log('Errors:', errors);
  console.log('Dead Ends (no choices, not explicitly marked as death/end):', deadEnds);
  // Unreachable is normal in CYOA if we missed some alternate starting points, but let's see.
  // console.log('Unreachable sections:', Array.from(unreachable).slice(0, 20));
  
} catch (e) {
  console.error("Failed to parse story.ts:", e);
}

fs.unlinkSync('temp_story.js');
