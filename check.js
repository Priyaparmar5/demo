var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { response } = require('express');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('assets'));
var util = require('util');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hrms'
});

app.get("/",(req,res) =>{
    
    connection.query(`select *from check_master `,  (error, result)=> {
    if (error){ throw error;}
       res.render('check',{data:result});
});    
});app.listen(5002);