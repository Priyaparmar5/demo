var express = require('express');
const connect = require('http2');
var app = express();
var mysql = require('mysql2');
const { query } = require('express');
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
app.get("/page", (req, res) => {
    var numrows ;
    var numPages;
    var order=req.query.order||'asc';
    page = req.query.number || 1;
    cur_var=req.query.curvar || "id";
    p=parseInt(req.query.number);
    limit = 30;
    offset = (page - 1) * limit;
    if (isNaN(offset)) {
        offset = 0;
    }
    // con.query(`select count(*) as numrows from student_express;`, (err, result) => {
    //     if (err) throw err;
    //     numrows = result[0].numrows;
    //     // console.log(numrows)
    //     numPages = Math.ceil(numrows/limit);
    // })  

    console.log(cur_var)
    console.log(order)
    con.query(`select * from student_exp order by ${cur_var} ${order} limit ${offset},${limit};`, (err, result1) => {
        if (err) throw err;
        // console.log(numPages)
        // console.log(result1)
        res.render('sort', { data:result1, total:numPages ,p,cur_var,order});
    })
}); app.listen(9012);