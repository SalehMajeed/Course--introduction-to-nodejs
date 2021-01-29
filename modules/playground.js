const fs = require('fs');

const file = fs.readFileSync('./data.js', { encoding: 'utf-8' }).toString();
console.log(file);
