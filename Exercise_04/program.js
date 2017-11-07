var fs = require('fs');

var myNumber = process.argv[2];

fs.readFile(myNumber, function(err, readValue){
    if(err)
        return console.log(err);
        
    var cString = readValue.toString().split('\n').length - 1;
    console.log(cString);
});