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
var data = [];
  app.get('/stu',(req,res)=>{
    
    for(let i=0; i<100; i+=10)
      connection.query(`select *from student_exp limit ${i},10`,  (error, result)=> {
          if (error){ throw error;}
          else{ 
          data.push(result);
          }
  });    
 setTimeout(()=>{
  console.log(data);
  res.render('stu_table',{data:data});
 },1000);

});

app.listen(6000,()=>{
  console.log('port running at '+6000)
});



