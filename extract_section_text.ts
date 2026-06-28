import { storyData } from './src/data/story';
import * as fs from 'fs';

const sections_to_find = ['2', '7', '22', '30', '34', '39', '50', '58', '63', '72', '77', '82', '93', '97', '106', '114', '122', '130', '131', '144', '152', '158', '160', '170', '177', '187', '190', '200', '212', '235', '244', '251', '264', '268', '274', '280', '285', '294', '300', '307', '315', '322', '332', '333', '341', '350'];

let out = '';
for (const s of sections_to_find) {
    if (storyData[s]) {
        let text = storyData[s].text;
        if (Array.isArray(text)) text = text.join(' ');
        out += `Section ${s}: ${text.substring(0, 150)}...\n`;
    } else {
        out += `Section ${s}: NOT FOUND\n`;
    }
}

fs.writeFileSync('sections_content.txt', out);
console.log('Done.');
