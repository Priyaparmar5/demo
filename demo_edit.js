var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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
 

app.get("/edittable",(req,res)=>{
   
    connection.query(`select *from edittable`,(err,result)=>
    {
      if(err) throw err;
      data=result;
      res.render('editdemo',data);
    })
  })

  app.get("/add",(req,res)=>{
   
    var add= req.query
    var fname = add.fname;
    var lname = add.lname;
    var contact = add.contact;
    var address = add.address;
     
    connection.query(`insert into edittable(fname,lname,contact,address)values('${fname}','${lname}','${contact}','${address}')`,(err,result)=>
    {
      if(err) throw err;
      data=result;
     console.log("record add successfully")
    })
  })

  app.get("/save",(req,res)=>{
  
  var save= req.query
  
  var fname = save.fname;
  var id=save.id;
  console.log(id)
    var lname = save.lname;
    var contact = save.contact;
    var address = save.address;
    connection.query(`update edittable set fname='${fname}',lname='${lname}',contact='${contact}',address='${address}' where id='${id}'`,(err,result)=>
    {
      if(err) throw err;
      data=result;
     // res.render('editdemo',{data});
    })
  })

  app.get("/delete",(req,res)=>{
  
    var save= req.query
    
    var fname = save.fname;
    var id=save.id;
    console.log(id)
      var lname = save.lname;
      var contact = save.contact;
      var address = save.address;
      connection.query(`delete from edittable where id='${id}'`,(err,result)=>
      {
        if(err) throw err;
        data=result;
       // res.render('editdemo',{data});
      })
    })

  app.post("/saveall",(req,res)=>{
    
    var sid = req.body.id;
    console.log(sid);
    console.log("in savfeall")
    
    var add= req.body
    var fname = add.fname;
    var lname = add.lname;
    var contact = add.contact;
    var address = add.address;
    console.log(fname,lname,contact,address);
    for(let i=0; i<fname.length; i++){
      if(!sid[i] )
      {
        var sql= connection.query(`insert into edittable(fname,lname,contact,address)values('${fname[i]}','${lname[i]}','${contact[i]}','${address[i]}')`,(err,result)=>
        {
          if(err) throw err;
          //data=result
        console.log("record add successfully")
        // console.log(sql);
        })
      }
      else{
      connection.query(`update edittable set fname='${fname[i]}',lname='${lname[i]}',contact='${contact[i]}',address='${address[i]}' where id='${sid[i]}'`,(err,result)=>
      {
        if(err) throw err;
       // data=result;
      //  res.render('editdemo',data);
      })
     }
    }
  })
  

app.listen(5002, () => {
  console.log('port running at ' + 5002)
});


