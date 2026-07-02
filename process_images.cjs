const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\cff18087-5d72-4a92-83ac-37a11a24a945';
const destDir = 'src/assets/images/sections';
const storyFile = 'src/data/story.ts';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let storyContent = fs.readFileSync(storyFile, 'utf8');

const files = fs.readdirSync(artifactsDir);
const imageFiles = files.filter(f => f.startsWith('sect') && f.endsWith('.png'));

for (const file of imageFiles) {
  // Extract sectXX from sectXX_123456.png
  const match = file.match(/^(sect\d+)_/);
  if (match) {
    const sectionName = match[1]; // e.g. sect21
    const sectionId = sectionName.replace('sect', ''); // e.g. 21
    
    // Copy the file
    const srcPath = path.join(artifactsDir, file);
    const destPath = path.join(destDir, `${sectionName}.png`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to ${destPath}`);
    
    // Update story.ts
    // We look for `"id": "21",` followed by `"location": "...",` and insert the image property
    const regex = new RegExp(`("id": "${sectionId}",\\s*"location": "[^"]+",\\s*"text": \\[.*?\\])`, 's');
    if (regex.test(storyContent)) {
      if (!storyContent.includes(`"image": "/images/sections/${sectionName}.png"`)) {
         storyContent = storyContent.replace(regex, `$1,\n    "image": "/images/sections/${sectionName}.png"`);
         console.log(`Updated story.ts for section ${sectionId}`);
      }
    } else {
        // sometimes text is not an array
        const regex2 = new RegExp(`("id": "${sectionId}",\\s*"location": "[^"]+",\\s*"text": "[^"]+",\\s*\\{[^}]+\\})`, 's');
        if (regex2.test(storyContent)) {
            if (!storyContent.includes(`"image": "/images/sections/${sectionName}.png"`)) {
                storyContent = storyContent.replace(regex2, `$1,\n    "image": "/images/sections/${sectionName}.png"`);
                console.log(`Updated story.ts for section ${sectionId} (string text)`);
            }
        }
    }
  }
}

fs.writeFileSync(storyFile, storyContent);
console.log('Done!');
