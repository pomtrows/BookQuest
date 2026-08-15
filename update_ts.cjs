const fs = require('fs');
let content = fs.readFileSync('src/data/book2.ts', 'utf8');
const ids = [117, 118, 119, 120, 121];
ids.forEach(id => {
    let regex = new RegExp('(id:\\s*' + id + '\\s*,)');
    content = content.replace(regex, '\n    image: "/images/sections/book2_sect' + id + '.jpg",');
});
fs.writeFileSync('src/data/book2.ts', content);
