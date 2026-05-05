const fs = require('fs');
function h(s){let v=0;for(let i=0;i<s.length;i++){v=((v<<5)-v)+s.charCodeAt(i);v|=0;}return Math.abs(v).toString(36);}
const d=fs.readFileSync('./data.js','utf8');const sds=d.split('const freqData =')[0].replace('const subjectsData = ','').trim();let cs=sds;if(cs.endsWith(';'))cs=cs.slice(0,-1);const S=eval(cs);
const answersData = JSON.parse(fs.readFileSync('./answers.js','utf8').replace('const answersData = ','').trim().replace(/;$/,''));
for(const s of S){if(s.id==='xml'||s.id==='rm'){for(const u of s.units){for(const q of u.questions){const id=`${s.id}-${u.unit}-${h(q.q)}`;if(!answersData[id])console.log(id,'|||',q.q.substring(0,80));}}}}
