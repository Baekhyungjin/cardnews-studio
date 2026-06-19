const fs = require('fs');
const content = fs.readFileSync('src/data/templates.js', 'utf8');
const urls = [...content.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?w=800&q=80/g)].map(m => m[0]);
const uniqueUrls = [...new Set(urls)];

async function checkUrls() {
  console.log('Checking URLs: ' + uniqueUrls.length);
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) console.log('BROKEN [' + res.status + ']: ' + url);
      else console.log('OK: ' + url);
    } catch (e) {
      console.log('ERROR: ' + url + ' - ' + e.message);
    }
  }
  console.log('Done.');
}
checkUrls();
