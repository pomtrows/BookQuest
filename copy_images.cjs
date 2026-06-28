const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Pomito\\.gemini\\antigravity\\brain\\cff18087-5d72-4a92-83ac-37a11a24a945';
const destDir = 'public\\images\\enemies';

const files = fs.readdirSync(srcDir);
const prefixMap = {
  'drakkarim_': 'drakkarim.png',
  'garde_': 'garde.png',
  'gluatre_': 'gluatre.png',
  'ours_': 'ours.png',
  'serpent_': 'serpent.png',
  'fou_': 'fou.png',
  'vipere_': 'vipere.png',
  'voleur_': 'voleur.png',
  'crypte_': 'crypte.png'
};

files.forEach(file => {
  for (const [prefix, target] of Object.entries(prefixMap)) {
    if (file.startsWith(prefix) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, target));
      console.log(`Copied ${file} to ${target}`);
    }
  }
});
