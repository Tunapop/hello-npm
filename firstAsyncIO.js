const fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
    if (err){
        return console.log(err);
    }
	const fileLine = data.toString().split("\n").length -1;
	console.log(fileLine);
})
