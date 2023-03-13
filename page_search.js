var mysql = require('mysql2');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'studentdb'

});


connection.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
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
    console.log("record displayed successfully")
  });

});

app.get('/form',(req,res)=>{
  // var item = req.query.search;
  // //console.log(item);
  // connection.query(`select * from student_exp where fname='${item}';`,(error,data)=>{
  //   if(error) {throw error;}
  //  // data[1] = data;
  //   res.render('pagesearch',{data :data});
  //   console.log(item);
  // })
  var value = req.query.search;
  
   console.log(value);
   
   connection.query(`select * from student_exp where fname='${value}';`,(err,result)=>{
       if(err) throw err;
       data[1] = data;
       res.render('pagesearch',{data:result});

   })
  
});


app.listen(5001, () => {
  console.log('port running at ' + 5001)
});


