var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });

fs.readFile('input.txt', 'utf-8', function(err, data){
    if (err) throw err;

    console.log(typeof(data)); 

    const arr = data.split(" ");


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log("Capitalize word:"+str2);
});

