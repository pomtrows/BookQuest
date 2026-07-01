import { storyData } from './src/data/story';

let errors = [];
let deadEnds = [];
let unreachable = new Set(Object.keys(storyData));

unreachable.delete('prologue');
unreachable.delete('1');

for (const [id, section] of Object.entries(storyData)) {
  if (!section.choices || section.choices.length === 0) {
    const textArray = Array.isArray(section.text) ? section.text : [section.text];
    const text = textArray.join(' ').toLowerCase();
    if (!text.includes('fin') && 
        !text.includes('aventure se termine') &&
        !text.includes('vous êtes mort')) {
      deadEnds.push(id);
    }
  } else {
    for (const choice of section.choices) {
      if (!storyData[choice.targetId]) {
        errors.push(`Section ${id} points to non-existent targetId: ${choice.targetId}`);
      } else {
        unreachable.delete(choice.targetId);
      }
    }
  }
}

console.log(storyData['54'].text);
console.log(storyData['60'].text);
