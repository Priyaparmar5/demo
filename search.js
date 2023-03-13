var express = require('express');
const connect = require('http2');
var app = express();
var mysql = require('mysql2');
const { query } = require('express');
const { render } = require('ejs');
app.set('view engine', 'ejs');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "studentdb"
});
con.connect((err) => {
    if (err) throw err;
    console.log("success!")

})


app.get('/page', (req, res) => {
    var col = req.query.col_nm || "id";
    var data = [];
    var count;
    var curr_page;
    
   
    page = req.query.num || 1;
    curr_page = parseInt(req.query.num);
    limit = 25;
    offset = (page - 1) * limit;
    if (isNaN(offset)) {
      offset = 0;
    }
    connection.query('select count(*) as numrows  from student_exp', (error, stu_data_1) => {
      if (error) throw error;
      data[0] = stu_data_1[0].numrows;
      count = Math.ceil(data[0] / limit);
      
      console.log(count)
  
    });
  
    connection.query(`select *from student_exp order by ${col} limit ${offset},${limit}`, (error, result) => {
      if (error) { throw error; }
      data[1] = result;
      res.render('pagesearch', { data: data, count: count , curr_page, col_n : col});
      console.log("record displayed successfully");
    });
  
  });

app.get("/form",(req,res)=>{
    var value = req.query.search;
    var fname;
    var lname;
    var contact;
    var city;
    var fname;
    var email,s1,s2,s3,s4,s5;

   

    console.log(value);
    
    con.query(`select * from student_exp where fname='${value}';`,(err,result)=>{
        if(err) throw err;
        res.render('search',{data:result});

    })
})
 app.listen(5000);


