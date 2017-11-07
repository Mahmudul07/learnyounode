var fs = require('fs');

var readValue = fs.readFileSync(process.argv[2]);
var cString = readValue.toString().split('\n').length - 1;

console.log(cString);