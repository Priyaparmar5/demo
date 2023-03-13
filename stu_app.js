var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine','ejs')
var conn = mysql.createconn({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'studentdb'

});


conn.connect((err)=>{
  if(err)
  throw err;
  console.log("connected");
})

  app.get('/stu_table',(req,res)=>{
    var data = [];
      conn.query('select *from student_exp limit 0,10',  (error, stu_data_1)=> {
          if (error) throw error;
          data[0] = stu_data_1;
          
  });    
 
    conn.query('select *from student_exp limit 10,10;',  (error, stu_data_2)=>{
        if (error) throw error;
        data[1] = stu_data_2;
       // res.render('stu_table', {data});
});   
  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_3)=>{
    if (error) throw error;
    data[2] = stu_data_3;
    //res.render('stu_table', {data});
  });  
  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_4)=>{
    if (error) throw error;
    data[3] = stu_data_4;
    //res.render('stu_table', {data});
  });  
  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_5)=>{
    if (error) throw error;
    data[4] = stu_data_5;
    //res.render('stu_table', {data});
  });  

  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_6)=>{
    if (error) throw error;
    data[5] = stu_data_6;
    //res.render('stu_table', {data});
  });  
  
  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_7)=>{
    if (error) throw error;
    data[6] = stu_data_7;
    //res.render('stu_table', {data});
  });  
  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_8)=>{
    if (error) throw error;
    data[7] = stu_data_8;
    //res.render('stu_table', {data});
  });  
  conn.query('select *from student_exp limit 20,10;',  (error, stu_data_9)=>{
    if (error) throw error;
    data[8] = stu_data_9;
    //res.render('stu_table', {data});
  });  

  conn.query('select *from student_exp limit 30,10;',  (error, stu_data_10)=>{
    if (error) throw error;
    data[9] = stu_data_10;
    res.render('stu_table', {data});
});   


});

app.listen(5002,()=>{
  console.log('port running at '+5002)
});



