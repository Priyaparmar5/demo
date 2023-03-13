var fs = require('fs');
var data = "\n This is append.js file to perform append operation";


fs.appendFile('input.txt',data,'utf-8',
    function(err){ 
        if(err) throw err;
        console.log("Data append successfully");
    });


     fs.readFile('input.txt', function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
     });