var fs = require("fs");

fs.readFile('input.txt',function(err,data){
    if(err)
    {
        return console.error(err);
    }
    console.log("Asynchronous read: "+data.toString());
});
//synchronous
var data = fs.readFileSync('input.txt');
console.log('Synchronous read:'+data.toString());

var buf = new Buffer(1024);
 
// Asynchronous - Opening File
console.log("open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     


fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
       console.log(err);
    }
    console.log(bytes + " bytes read");
     
    
    if(bytes > 0){
       console.log(buf.slice(0, bytes).toString());
    }
 });

 fs.writeFile('input.txt','Hello file system',function(err){
    if(err)
    {
        console.log(err);
    }
    console.log("data written successfully")
 });
 fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
 
});

//create directory

console.log("Going to create directory /tmp/nodejs");
fs.mkdir('/tmp/nodejs',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

fs.rmdir("/tmp/nodejs",function(err) {
    if (err) {
       return console.error(err);
    }
    console.log("Going to read directory /tmp");
    
    fs.readdir("/tmp/",function(err, files) {
       if (err) {
          return console.error(err);
       }
       files.forEach( function (file) {
          console.log( file );
       });
    });
 });
