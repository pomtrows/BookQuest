const fs = require('fs');
const code = fs.readFileSync('src/data/story.ts', 'utf8');
[349, 153, 142, 263, 155].forEach(id => { 
  const regex = new RegExp('"' + id + '": \\{[\\s\\S]*?"text": \\[\n([\\s\\S]*?)\n    \\]');
  const m = code.match(regex);
  console.log('SECTION', id, ':\n', m ? m[1].substring(0, 300) : 'not found', '\n------------------'); 
});
