const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const fileLine = file.toString().split("\n").length - 1;

console.log(fileLine);