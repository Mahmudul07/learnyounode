var fs = require('fs');
var path = require('path');

var dirr = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dirr, function(err, file){
    if(err)
        return console.error(err);
        
    file.forEach(function(file){
        if(path.extname(file) === ext){
            console.log(file);
        }
    });
});