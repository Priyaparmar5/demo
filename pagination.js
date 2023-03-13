var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine','ejs')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'studentdb'

});

connection.connect((err)=>{
  if(err)
  throw err;
  console.log("connected");
})
app.get("/page",(req,res) =>{
    page = req.params.page || 1;
    limit =40;
    offset=(page - 1)*limit;
    if(isNaN(offset)){
        offset=0;
    }
    connection.query(`select *from student_exp limit ${offset},${limit}`,  (error, result)=> {
    if (error){ throw error;}
       res.render('pagination',{data:result});
});    
});app.listen(5002);