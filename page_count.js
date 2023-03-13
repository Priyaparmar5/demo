var mysql = require('mysql2');
var express = require('express');
var app = express();
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

app.get('/:page', (req, res) => {
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
    
    console.log(count);

  });

  connection.query(`select *from student_exp limit ${offset},${limit}`, (error, result) => {
    if (error) { throw error; }
    data[1] = result;
    res.render('sortpage', { data: data, count: count , curr_page});
    console.log("record displayed successfully")
  });

});

app.listen(5001, () => {
  console.log('port running at ' + 5001)
});
