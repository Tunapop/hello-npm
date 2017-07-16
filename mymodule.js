const fs = require('fs');
const path = require('path');
const filtered = [];

module.exports = function(fPath, fExtension, callback){
    
    fs.readdir(fPath, function(err, list){
        if (err){
            return callback(err);
        }
        list.forEach(function(file){
            if (path.extname(file) == ("."+fExtension)){
                filtered.push(file);
            }
        })
        callback(null, filtered);
    })
}