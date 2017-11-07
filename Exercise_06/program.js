var mymodule = require('./mymodule.js');
var dirr = process.argv[2];
var cString = process.argv[3];

mymodule(dirr, cString, function(err, list){
    if(err)
        return console.error("ERROR!!!", err);
        
    list.forEach(function(file){
        console.log(file);
    });
});