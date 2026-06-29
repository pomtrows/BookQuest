const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\cff18087-5d72-4a92-83ac-37a11a24a945';
const destDir = 'public\\images\\sections';

const files = fs.readdirSync(srcDir);

// we have generated images for:
const successfulSections = ['187', '190', '200', '212', '235', '244', '251', '264', '268', '274', '280', '285', '294', '300', '307', '315', '322'];

files.forEach(file => {
  for (const s of successfulSections) {
    if (file.startsWith(`sect${s}_`) && file.endsWith('.png')) {
      const destPath = path.join(destDir, `sect${s}.png`);
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(path.join(srcDir, file), destPath);
        console.log(`Copied ${file} to sect${s}.png`);
      }
    }
  }
});
