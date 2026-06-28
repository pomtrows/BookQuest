const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\cff18087-5d72-4a92-83ac-37a11a24a945';
const destDir = 'public\\images\\sections';

const files = fs.readdirSync(srcDir);
const prefixMap = {
  'sect2_': 'sect2.png',
  'sect7_': 'sect7.png',
  'sect22_': 'sect22.png',
  'sect30_': 'sect30.png',
  'sect34_': 'sect34.png',
  'sect39_': 'sect39.png',
  'sect50_': 'sect50.png',
  'sect58_': 'sect58.png',
};

files.forEach(file => {
  for (const [prefix, target] of Object.entries(prefixMap)) {
    if (file.startsWith(prefix) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, target));
      console.log(`Copied ${file} to ${target}`);
    }
  }
});
