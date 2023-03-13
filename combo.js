var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
const util = require('util');
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dropdown'

});
const query = util.promisify(connection.query).bind(connection);

connection.connect((err)=>{
  if(err) throw err;
  console.log("connected");
})

async function generateDropdown(name)
{
  var optionArray = await query(`select * from select_master inner join option_master on select_master.select_id = option_master.s_id where select_name="${name}"`)
  var s="";
  s+=`<select id="${name}" value="${name}">`
  for(var i=0; i<optionArray.length; i++)
  {
    s+=`<option value="${optionArray[i].option_key}">${optionArray[i].option_name}</option>`
  }
  s+=`</select>`
  return s;
}

app.get('/', async(req,res)=>{
  
  var selectboxname = await query(`select select_name from select_master;`)
  console.log(selectboxname)
  var dropDownStringArr =[];

  for(var i=0; i<selectboxname.length; i++){
    dropDownStringArr[selectboxname[i].select_name] = await generateDropdown(selectboxname[i].select_name)
  }
  res.render('combo_index',{dropDownStringArr});
});


app.listen(5004, () => {
    console.log('port running at ' + 5004)
  });
  
  
  