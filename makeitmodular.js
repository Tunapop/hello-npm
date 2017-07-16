const mymodule = require('./mymodule.js');
const fPath = process.argv[2];
const fExtension = process.argv[3];


mymodule(fPath, fExtension, function(err, data){
    if (err){
        console.error(err);
        process.exit(1);
    }
    data.forEach(function(file){
        console.log(file);
    });
});
