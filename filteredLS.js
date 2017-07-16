const fs = require('fs');
const fPath = process.argv[2];
const fExtension = process.argv[3];
const path = require('path');

fs.readdir(fPath, function(err, list){
    list.forEach(function(file){
        if (path.extname(file) == ("."+fExtension)){
            console.log(file);
        }
    });
});
    

