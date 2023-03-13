var mysql      = require('mysql2');
var express = require('express');
var app  = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'studentdb'
});

connection.connect((err)=>{
    if(err)
    throw err;
    console.log("connected");
  })
    app.get("/student/data",(req,res)=>{
        connection.query('SELECT * from student', function (error, results) {
            if (error) throw error;
            res.send(results);
           
    });    
    });app.listen(8880);
    app.post("/student/data",(req,res)=>{
        connection.query("insert into student(fname, lname, contact, city, email) values ('Priya', 'Parmar', '3238492375', 'Thị Trấn Hùng Quốc', 'priya@gmail.com');"
        , function (error, results) {
            if (error) throw error;
            res.send(results);
           console.log("record inserted successfully");
    });     
});app.listen(4050);

