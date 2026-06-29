const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\cff18087-5d72-4a92-83ac-37a11a24a945';
const destDir = 'public\\images\\sections';

const files = fs.readdirSync(srcDir);

// we have generated images for:
const successfulSections = ['63', '72', '77', '82', '93', '97', '106', '114', '122', '130', '131', '144', '152', '158', '160', '170', '177'];

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
