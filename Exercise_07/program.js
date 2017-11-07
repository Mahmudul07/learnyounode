var HTTP = require('http');

HTTP.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);