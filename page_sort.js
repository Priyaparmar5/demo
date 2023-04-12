var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
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
  let curr_order = req.query.curorder;
  let sort = req.query.order_type||'asc';

  if(curr_order){
    col=req.query.col_nm;
    sort = req.query.order_type;
  }
  else
  {
   col='id';
   curr_page=1;
   sort = 'asc';
  }

  // if (req.query.curorder) {
  //   cur_order = req.query.curorder;
  //   odrtype = req.query.odrtype;
  //   }
  //   else { // first time loding the url
  //   cur_order = 'id'
  //   curpage = 1;
  //   odrtype = 'ASC';
  //   }

  if (isNaN(offset)) {
    offset = 0;
  }

  connection.query('select count(*) as numrows  from student_exp', (error, stu_data_1) => {
    if (error) throw error;
    data[0] = stu_data_1[0].numrows;
    count = Math.ceil(data[0] / limit);
    
    console.log(count)

  });
//`select * from student_exp order by ${sort} ${col} limit ${offset},${limit}`, (error, result)
  connection.query(`select * from student_exp order by ${col} ${sort}  limit ${offset},${limit}`,(error, result) => {
    if (error) { throw error; }
    
    data[1] = result;
    res.render('pagesort', { data: data, count: count , curr_page, col_n : col, sort});
    console.log("record displayed successfully")
  });

});

app.listen(5002, () => {
  console.log('port running at ' + 5002)
});


