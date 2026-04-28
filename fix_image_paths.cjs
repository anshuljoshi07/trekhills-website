const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/data/treks.js');

let content = fs.readFileSync(file, 'utf8');

// Replace all occurrences of "image": "/ with "image": "
content = content.replace(/"image":\s*"\//g, '"image": "');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully fixed image paths in treks.js');
