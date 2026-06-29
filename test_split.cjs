const fs = require('fs');

const code = fs.readFileSync('src/data/rules.ts', 'utf8');

// extract the content of disciplines
const match = code.match(/id: 'disciplines',[\s\S]*?content: `([\s\S]*?)`/);
if (match) {
  let content = match[1];
  console.log('Original content length:', content.length);
  
  const normalized = content.replace(/\r/g, '');
  const split1 = normalized.split(/\n\n+/);
  console.log('Split by \\n\\n+ length:', split1.length);
  
  const split2 = normalized.split(/\n\s*\n/);
  console.log('Split by \\n\\s*\\n length:', split2.length);

  const split3 = content.split(/\n\s*\n/);
  console.log('Split original by \\n\\s*\\n length:', split3.length);

  // let's look at the first few parts of split2
  for (let i=0; i<Math.min(3, split2.length); i++) {
    console.log(`PART ${i}:`, JSON.stringify(split2[i].substring(0, 50)));
  }
} else {
  console.log('Could not match rules content');
}
