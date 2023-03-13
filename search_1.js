var express = require('express');
const connect = require('http2');
var app = express();
var mysql = require('mysql2');
const { query } = require('express');
const { render } = require('ejs');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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


  app.get('/searching', function (req, res) {
    var text = req.query.search || 1;
    var data_1;
//
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
  con.query('select count(*) as numrows  from student_exp', (error, data_1) => {
    if (error) throw error;
    data[0] = data_1[0].numrows;
    count = Math.ceil(data[0] / limit);
    
    console.log(count);

  });


//
    if (text == 1 || "") {
        con.query(`select * from student_exp limit ${offset},${limit}`, function (err, data) {
            if (err) throw err;
            data_1 = data;
            res.render('search', { data_1:data });
        });
    }
    else {

        var firstname = "";
        var lastname = "";
        var contactno = "";
        var emailid = "";
        var cityname = "";
        var dateofbirth = "";

        for(var i=0; i<text.length; i++)
        {
            if(text.charAt(i) == '!')
            {
                for(var j=i+1; j<=text.length; j++)
                {
                    if(text.charAt(j) =='@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&')
                    {
                        break;
                    }
                    else
                    {
                        var firstname = firstname + text.charAt(j);
                    }
                }
            }
            else if(text.charAt(i) == '@')
            {
                for(var j=i+1; j<=text.length; j++)
                {
                    if(text.charAt(j) =='!' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&')
                    {
                        break;
                    }
                    else
                    {
                        var lastname = lastname + text.charAt(j);
                    }
                }
            }
            else if(text.charAt(i) == '#')
            {
                for(var j=i+1; j<=text.length; j++)
                {
                    if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&')
                    {
                        break;
                    }
                    else
                    {
                        var contactno = contactno + text.charAt(j);
                    }
                }
            }
            else if(text.charAt(i) == '$')
            {
                for(var j=i+1; j<=text.length; j++)
                {
                    if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&')
                    {
                        break;
                    }
                    else
                    {
                        var emailid = emailid + text.charAt(j);
                    }
                }
            }
            
            else if(text.charAt(i) == '^')
            {
                for(var j=i+1; j<=text.length; j++)
                {
                    if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '&')
                    {
                        break;
                    }
                    else
                    {
                        var cityname = cityname + text.charAt(j);
                    }
                }
            }
            else if(text.charAt(i) == '&')
            {
                for(var j=i+1; j<=text.length; j++)
                {
                    if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^')
                    {
                        break;
                    }
                    else
                    {
                        var dateofbirth = dateofbirth + text.charAt(j);
                    }
                }
            }
        }

        con.query(`select * from student_exp where fname LIKE '%${firstname}%' AND lname LIKE '%${lastname}%' AND contact LIKE '%${contactno}%' AND email LIKE '%${emailid}%' AND city LIKE '%${cityname}%' AND dob LIKE '%${dateofbirth}%'`, function (err, data) {
            if (err) throw err;
            data_1 = data;
            res.render('search', { data_1 :data});
        });
    }
});
 app.listen(5000);


