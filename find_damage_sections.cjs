const fs=require('fs'); 
const lines=fs.readFileSync('src/data/story.ts','utf8').split('\n'); 
let lastId=''; 
for(let i=0;i<lines.length;i++){ 
  const m=lines[i].match(/"id":\s*"(\d+)"/); 
  if(m) lastId=m[1]; 
  if(lines[i].match(/perdez.*points d'ENDURANCE/i)) console.log(lastId + ': ' + lines[i].trim()); 
}
