var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get("/calc",(req,res)=>{
   
      res.render('calculator');
    
})

app.listen(5002, () => {
    console.log('port running at ' + 5002)
  });
  