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
  database: 'form'
});

var connection1 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'jobdb'

});
var connection2 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'studentdb'

});
var connection3 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'studentdb'

});
var con = mysql.createConnection({
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
connection1.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})


app.get('/login', (req, response) => {

  var token = req.cookies.jwtToken;
  if (token) {
    //const token = jwt.verify(token,"priya");
    response.redirect("home");
  }
  else {
    response.render('login');
  }
});

app.get('/register', (req, response) => {

  var token = req.cookies.jwtToken;
  if (token) {
    // const token = jwt.verify(token,"priya");
    response.redirect("home");
  }
  else {
    response.render('registration');
  }
});

app.get('/loginValidate', (req, response) => {

  var email = req.query.email;
  var password = req.query.password;

  console.log(email);
  console.log(password);
  //  var sql = `SELECT email FROM registration`;
  connection.query(`SELECT email and password FROM registration where email='${email}',password='${password}'`, (error, result) => {
    if (error) throw error;
    // const myJSON = JSON.stringify(result);
    // console.log(result);
    // if(result == ""){
    // res.json({exist : false});
    // }else{
    // res.json({exist : true});
    // }
    // console.log("result"+result)
  })
});

app.get('/logout', (req, res) => {
  res.clearCookie('jwtToken');
  res.redirect("/register");
})


app.get('/home', (req, res) => {
  var token = req.cookies.jwtToken;
  if (!token) {
    return res.send('you are not authorized user<a href="/register">register</a>');
  }
})
app.get('/resetpass?', (req, res) => {
  const email = req.query.email;
  console.log(email);
  res.render('resetpassword', { email });
})

app.get('/forgotpassword', (req, res) => {
  res.render('forgotpassword');
})

app.post('/forgotpassword', (req, res) => {
  var email = req.body.email;
  var activation_token = Math.random().toString(36).substring(2, 15);
  console.log(activation_token);
  var activation_link = ` http://localhost:5002/resetpass?token=${activation_token}&email=${email}`;
  res.send(`<a href="${activation_link}">Click here to reset your password</a>`)
})

app.post('/register', async (req, res) => {

  var pass = req.body.password;
  var uname = req.body.uname;
  var email = req.body.email;
  var cpass = req.body.cpassword;
  var hash1 = await bcrypt.hash(pass, 10);
  console.log(uname);
  console.log(cpass);
  console.log(hash1);
  console.log(pass);
  console.log(email);

  var activation_token = Math.random().toString(36).substring(2, 15);
  console.log(activation_token);

  // connection.query(`select email from registration where email='${email}'`,(error,result)=>{

  // console.log(result);
  // if(result == ""){
  connection.query(`insert into registration(username,email,password,confirm_password,activation_key)values('${uname}','${email}','${hash1}','${cpass}','${activation_token}')`, (error, data) => {
    if (error) throw error;
    console.log("Data registered successfully");
    var activation_link = ` http://localhost:5002/activate?token=${activation_token}`;
    res.send(`<a href="${activation_link}">Click here to activate your account</a>`)
  });
  // res.render('login');
  //  }
  //   else{
  //     res.send('email already exists');
  //   }
  // });

});

app.get("/emailValidate?", async (req, res) => {


  var email = req.query.email;
  console.log(email);
  //  var sql = `SELECT email FROM registration`;
  connection.query(`SELECT email FROM registration where email='${email}'`, (error, result) => {
    if (error) throw error;
    // const myJSON = JSON.stringify(result);
    console.log(result);
    if (result == "") {
      res.json({ exist: false });
    } else {
      res.json({ exist: true });
    }
    console.log("result" + result)
  })
})

app.post("/changepass", async (req, res) => {
  var pass = req.body.password;
  var email = req.body.email;
  var hash1 = await bcrypt.hash(pass.toString(), 10);
  console.log('hash1' + hash1);
  console.log(pass);
  connection.query(`update registration set password='${hash1}',confirm_password='${pass}' where email = '${email}'`, (error, result) => {

    //var result = await connection.execute(varifyUser);
    if (error) throw error;
    res.render('login');
    console.log("password update successfully")
  });

})


app.get("/activate?", async (req, res) => {
  var token = req.query.token;
  connection.query(`update registration set isactivated=1 where activation_key="${token}"`, (error, result) => {

    console.log(result)
    if (result.affectedRows == 0) {
      res.send("not activated")
    } else {
      //res.send("Your account is activated");
      res.render('login');
    }
  })
})

app.post("/login", async (req, res) => {

  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  connection.query(`select * from registration where email = '${email}'`, async (error, result) => {

    //var result = await connection.execute(varifyUser);
    console.log(result);
    if (result[0].length == 0) {
      return res.send("user not found")
    }
    //console.log(result[0]);
    const data = result[0];
    //comparing password
    let bpass = result[0].password;
    console.log("bpass", bpass)

    let eid = result[0].id;
    console.log('eid:'+eid)
    var match = await bcrypt.compare(password, bpass);
    console.log(match);
    if (!match) {
      return res.send(`wrong password!`)
    }

    //generating jwt token
    const jwtToken = jwt.sign(data, "priya");
    res.cookie("jwtToken", jwtToken);
    const tokenData = jwt.verify(jwtToken, "priya");
    console.log(tokenData);
    res.render("home", { tokenData });
  });

})



// ----job------------


const query = util.promisify(connection1.query).bind(connection1);
connection1.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})
var sql = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="state";`;

var sql1 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="city";`;
var sql2 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="relationship";`;
var sql3 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="course";`;
var sql4 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="technology";`;
var sql5 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="department";`;
var sql6 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="pref_location";`;
var sql7 = `select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="language";`;

app.post('/job', (req, response) => {

  let f_name = req.body.fname;
  let l_name = req.body.lname;
  let designation1 = req.body.designation;
  let add1 = req.body.address;
  let add2 = req.body.add2;
  let contact1 = req.body.contact;
  let relation = req.body.relationship;
  let city1 = req.body.city;
  let mail = req.body.email;
  let state1 = req.body.state;
  let zipcode = req.body.zip;
  let dob1 = req.body.dob;
  let gen = req.body.gender;
  //
  let course1 = req.body.course;
  let univ = req.body.uni;
  let passing = req.body.pass;
  let perc = req.body.per;
  //
  let prefloc = req.body.location;
  let notice1 = req.body.notice;
  let depart = req.body.department;
  let exp = req.body.expected;
  let cur = req.body.current;
  //
  let rel = req.body.relation_1;
  let nm = req.body.name;
  let phn = req.body.phone;
  //
  let rel1 = req.body.relation_2;
  let nm1 = req.body.name1;
  let phn1 = req.body.phone1;
  //
  let comp = req.body.company;
  let desig = req.body.designation_1;
  let f_date = req.body.fdate;
  let t_date = req.body.tdate;
  //

  //
  let t1 = req.body.techno;
  let t2 = req.body.techno;
  let t3 = req.body.techno;
  //
  console.log(f_name);
  console.log(l_name);
  console.log(designation1);
  console.log(add1);
  console.log(add2);
  console.log(contact1);
  console.log(city1);
  console.log(mail);
  console.log(relation);
  console.log(state1);
  console.log(zipcode);
  console.log(dob1);
  console.log(gen);
  //
  console.log(course1);
  console.log(univ);
  console.log(passing);
  console.log(perc);
  //
  console.log(prefloc);
  console.log(notice1);
  console.log(cur);
  console.log(exp);
  console.log(depart);
  //
  console.log(comp);
  console.log(desig);
  console.log(f_date);
  console.log(t_date);
  //

  //console.log(ck);
  //var lname = req.body.lname;
  var languageknown = req.body.languageknown || '';
  var read = req.body.read || '';
  var write = req.body.write || '';
  var speak = req.body.speak || '';
  console.log(read);
  console.log(write);
  console.log(speak);


  let technologies = req.body.technology1;
  console.log(technologies);
  for (let i = 0; i < technologies.length; i++) {
    console.log(req.body[technologies[i]]);
  }



  var sql8 = `INSERT INTO basic_detail (fname,lname,designation, contact, address, address2,city, state, email,gender,dob, zipcode, relationship_status) VALUES ("${f_name} ","${l_name}","${designation1}" , "${contact1}"," ${add1}", "${add2}", "${city1}" , "${state1}", "${mail}", "${gen}","${dob1}" ,"${zipcode}" ,"${relation}")`;



  connection1.query(sql8, function (err, result) {
    if (err) throw err

    console.log('Row has been updated')
    let appid = result.insertId;
    console.log(appid)

    if (typeof (course1, univ, passing, perc) == 'string') {
      connection1.query(`INSERT INTO education_detail (candidate_id,course_name,university,percentage,passing_year) VALUES ("${appid}",
  "${course1}","${univ}","${perc}","${passing}")`, function (err, result) {
        if (err) throw err;
        console.log("record add successfully")
      });
    }
    else {
      for (i = 0; i < course1.length; i++) {
        connection1.query(`INSERT INTO education_detail (candidate_id,course_name,university,percentage,passing_year) VALUES ("${appid}","${course1[i]}","${univ[i]}","${perc[i]}","${passing[i]}")`, function (err, result) {
          if (err) throw err;
          console.log('record add successfully');
        });
      }
    }
    if (typeof (comp, desig, f_date, t_date) == 'string') {
      connection1.query(`INSERT INTO work_experience (candidate_id,company_name,designation,from_date,end_date) VALUES ("${appid}",
    "${comp}","${desig}","${f_date}","${t_date}")`, function (err, result) {
        if (err) throw err;
        console.log("record add successfully");
      });
    }
    else {
      for (i = 0; i < comp.length; i++) {
        connection1.query(`INSERT INTO work_experience (candidate_id,company_name,designation,from_date,end_date) VALUES ("${appid}","${comp[i]}","${desig[i]}","${f_date[i]}","${t_date[i]}")`, function (err, result) {
          if (err) throw err;
          console.log('record add successfully');
        });
      }

    }

    //technology
    for (var i = 0; i < technologies.length; i++) {
      var sql = connection1.query(`INSERT INTO technologies (candidate_id,tech_name, tech_expertise)values ('${appid}','${technologies[i]}', '${req.body[technologies[i]]}');`, function (err, result) {
        if (err) throw err;
      });
    }
    console.log(sql);

    var language1 = '';
    if (typeof (req.body.languageknown) == 'object') {
      language1 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values`;
      for (let i = 0; i < req.body.languageknown.length; i++) {
        language1 += `('${appid}', '${read.includes(req.body.languageknown[i]) ? 'yes' : 'no'}', '${write.includes(req.body.languageknown[i]) ? 'yes' : 'no'}', '${speak.includes(req.body.languageknown[i]) ? 'yes' : 'no'}','${req.body.languageknown[i]}'),`;
      }
      language1 = language1.slice(0, language1.length - 1);
    }
    else {
      language1 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) value('${appid}, '${read == req.body.languageknown ? 'yes' : 'no'}', '${write == req.body.languageknown ? 'yes' : 'no'}', '${speak == req.body.languageknown ? 'yes' : 'no'} ','${req.body.languageknown}')`;
    }

    connection1.query(language1, function (err, result6) {
      if (err) throw err;
      console.log(language1)
      //response.send("record add successfully");
      console.log("record add successfully")

    });


    connection1.query(`INSERT INTO preferences (candidate_id,expected_ctc,current_ctc,notice_period,preferred_location,department) VALUES ("${appid}",
  "${exp}","${cur}","${notice1}","${prefloc}","${depart}")`, function (err, result) {
      if (err) throw err

    })

    connection1.query(`INSERT INTO reference (candidate_id,references_name,references_contact,references_relation) VALUES ("${appid}",
"${nm}","${phn}","${rel}"), ("${appid}","${nm1}","${phn1}","${rel1}")`, function (err, result) {
      if (err) throw err

    })



    //---------------------------------------


    connection1.query(`select * from basic_detail WHERE isdel is null`, (error, data) => {
      if (error) throw error;
      // data = data;
      response.render('editjobview', { data });
    });
    //response.redirect('/')
  })

})

app.get("/getcity", (req, res) => {
  console.log('in getcity')
  let stateid = req.query.stateid || 0;
  console.log("stateid" + stateid);
  // connection.query(`select state_id from state where state_name='${stateid}'`,(err,res)=>
  // {
  //   data =res[0].state_id;
  //   console.log(res);
  // })

  var sql = connection1.query(`select city_name from city where state_id = '${stateid}'`, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result)
    res.end();
  })
  //console.log(sql);
})



app.get("/dltview", (req, res) => {

  let id = req.query.dltid || 0;
  console.log(id);
  connection1.query(`select *from basic_detail WHERE isdel ='${id}';`, (err, result) => {
    if (err) throw err;
    res.send(result);
    res.end();
  })
})

//
app.get("/delete", (req, res) => {
  let id = req.query.dltid || 0;
  console.log(id);
  connection1.query(`UPDATE basic_detail SET isdel = '1' WHERE candidate_id ='${id}';`, (err, result) => {
    if (err) throw err;
    res.send(result);
    res.end();
  })
})
//multiple
app.get("/dlt", (req, res) => {
  let id = req.query.cid;
  console.log(id);
  connection1.query(`UPDATE basic_detail SET isdel = '1' where candidate_id in (${id});`, (err, result) => {
    if (err) throw err;
    res.send(result);
    res.end();
  })
})


app.get('/job', (req, response) => {

  var token = req.cookies.jwtToken;
  if (!token) {
    return res.send('you are not authorized user<a href="/register">register</a>');
  }
  var data1 = {};
  let f_name = req.query.fname;
  let l_name = req.query.lname;
  let designation1 = req.query.designation;
  let add1 = req.query.address;
  let add2 = req.query.add2;
  let contact1 = req.query.contact;
  let relation = req.query.relationship;
  let city1 = req.query.city;
  let mail = req.query.email;
  let state = req.query.state || "";

  console.log(f_name);
  console.log(l_name);
  console.log(designation1);
  console.log(add1);
  console.log(add2);
  console.log(contact1);
  console.log(city1);
  console.log(mail);
  console.log(relation);
  //console.log(zipcode);

  //console.log(dob);

  connection1.query(`select *from state`, (error, res) => {
    if (error) throw error;
    data1['state'] = res;

  });


  connection1.query(sql2, (error, res) => {
    if (error) throw error;
    data1['relationship'] = res;

  });

  connection1.query(sql3, (error, res) => {
    if (error) throw error;
    data1['course'] = res;

  });

  connection1.query(sql4, (error, res) => {
    if (error) throw error;
    data1['technology'] = res;

  });

  connection1.query(sql5, (error, res) => {
    if (error) throw error;
    data1['department'] = res;


  });

  connection1.query(sql6, (error, res) => {
    if (error) throw error;
    data1['pref_location'] = res;


  });

  connection1.query(sql7, (error, res) => {
    if (error) throw error;
    data1['language'] = res;
    //   console.log(data1);

  });

  connection1.query(sql1, (error, res) => {
    if (error) throw error;
    data1['city'] = res;
    // console.log(data1);
    response.render('jobform1', { data: data1 });

  });


});

// app.get("/getRemainingCities", (req,res)=>{
//   var city_name = req.query.selectedCity;
//   console.log(city_name);
//   var sql=`select city_name from city where state_id in (select state_id from city where city="${city_name}") and city_name !="${city_name}";`
//   con.query(sql,(err,remainingCities)=>{
//   if(err) throw err;
//   console.log(remainingCities)
//   res.send(remainingCities);
//   res.end();
//   })
//   })
//------------update-------------------


app.post("/update", async (req, res) => {

  let cid = req.body.cid;
  var eduid = req.body.eduid;
  let expid = req.body.expid;
  let refid = req.body.refid;
  let pid = req.body.pid;
  let langid = req.body.lang_id;


  var read = req.body.read || '';
  var write = req.body.write || '';
  var speak = req.body.speak || '';
  var langname = req.body.lang || '';

  console.log(read);
  console.log(write);
  console.log(speak);
  console.log(langname);


  let f_name = req.body.fname;
  let l_name = req.body.lname;
  let designation1 = req.body.designation;
  let add1 = req.body.address;
  let add2 = req.body.add2;
  let contact1 = req.body.contact;
  let relation = req.body.relationship;
  let city1 = req.body.city;
  let mail = req.body.email;
  let state1 = req.body.state;
  let zipcode = req.body.zip;
  let dob1 = req.body.dob;
  let gen = req.body.gender;
  //

  let rel = req.body.relation_1;
  let nm = req.body.name;
  let phn = req.body.phone;
  console.log(rel);
  console.log(nm);
  console.log(phn);


  let prefloc = req.body.location;
  let notice1 = req.body.notice;
  let depart = req.body.department;
  let exp = req.body.expected;
  let cur = req.body.current;
  //
  console.log(prefloc);
  console.log(notice1);
  console.log(cur);
  console.log(exp);
  console.log(depart);

  var course1 = req.body.course1;
  let univ = req.body.uni;
  let passing = req.body.pass;
  let perc = req.body.per;
  //
  console.log("{course}" + course1);
  console.log("eid" + eduid);
  console.log(expid);

  console.log(univ);
  console.log(passing);
  console.log(perc);
  //
  //
  let company = req.body.company;
  let desig = req.body.designation_1;
  let f_date = req.body.fdate;
  let t_date = req.body.tdate;
  //
  console.log(company);
  console.log(desig);
  console.log(f_date);
  console.log(t_date);
  //
  console.log(f_name);
  console.log(l_name);
  console.log(designation1);
  console.log(add1);
  console.log(add2);
  console.log(contact1);
  console.log(city1);
  console.log(mail);
  console.log(relation);
  console.log(state1);
  console.log(zipcode);
  console.log(dob1);
  console.log(gen);

  //-------------------basic detail--------------------------
  // connection.query(`update basic_detail set fname="${f_name} ",lname="${l_name}",designation="${designation1}", contact="${contact1}", address=" ${add1}", address2="${add2}",city= "${city1}", state="${state1}", email="${mail}",gender="${gen}",dob="${dob1}" , zipcode="${zipcode}", relationship_status="${relation}" where candidate_id="${cid}" `, (error, res) => {
  //   let appid = res.insertId;
  //   console.log(appid);
  //   if (error) throw error;
  //   console.log("data updated successfully")

  // });

  // //---------------------education detail------------------------

  for (let i = 0; i < course1.length; i++) {
    connection1.query(`update education_detail set course_name="${course1[i]} ",university="${univ[i]}",percentage="${perc[i]}" , passing_year="${passing[i]}" where edu_id="${eduid[i]}" `, (error, res) => {
      if (error) throw error;
      console.log("data updated successfully")

    });
  }

});



app.get('/edit', (req, response) => {

  var data1 = {}
  //-------------

  connection1.query(`select *from state`, (error, res) => {
    if (error) throw error;
    state = res;
    console.log(state);

  });


  // connection.query("select option_name from jobdb.option_master where s_id=1;", function (err, result) {
  //     if (err) throw err;
  //     state = result;
  //     })
  connection1.query("select option_name from jobdb.option_master where s_id=2;", function (err, result) {
    if (err) throw err;
    city = result;

  })
  connection1.query("select option_name from jobdb.option_master where s_id=3;", function (err, result) {
    if (err) throw err;
    relationship = result;

  })
  connection1.query("select option_name from jobdb.option_master where s_id=4;", function (err, result) {
    if (err) throw err;
    course = result;
    console.log(course);
  })

  connection1.query("select option_name from jobdb.option_master where s_id=5;", function (err, result) {
    if (err) throw err;
    technology = result;

  })

  connection1.query("select option_name from jobdb.option_master where s_id=6;", function (err, result) {
    if (err) throw err;
    department = result;

  })
  connection1.query("select option_name from jobdb.option_master where s_id=7;", function (err, result) {
    if (err) throw err;
    preferred_location = result;

  })
  connection1.query("select option_name from jobdb.option_master where s_id=8;", function (err, result) {
    if (err) throw err;
    language = result;
    console.log(language);
  })




  //------------------
  var editid = req.query.id;
  console.log(editid);
  var sql1 = `select *from basic_detail where candidate_id=${editid}`;
  var sql2 = `select *from education_detail where candidate_id=${editid}`;
  var sql3 = `select *from work_experience where candidate_id=${editid}`;
  var sql4 = `select *from preferences where candidate_id=${editid}`;
  var sql5 = `select *from reference where candidate_id=${editid}`;
  var sql6 = `select *from languages where candidate_id=${editid}`;
  var sql7 = `select *from technologies where candidate_id=${editid}`;


  connection1.query(sql2, (error, result) => {

    if (error) { throw error; }
    data2 = result;
  })

  connection1.query(sql5, (error, result) => {

    if (error) { throw error; }
    data5 = result;
  })

  connection1.query(sql6, (error, result) => {

    if (error) { throw error; }
    lang = result;
  })

  connection1.query(sql7, (error, result) => {

    if (error) { throw error; }
    tech = result;
  })


  connection1.query(sql3, (error, result) => {

    if (error) { throw error; }
    data3 = result;
  })

  connection1.query(sql4, (error, result) => {

    if (error) { throw error; }
    data4 = result;
  })

  connection1.query(sql1, (error, result) => {

    if (error) { throw error; }
    data = result;
    response.render('editform', { data, data2, data3, data4, data5, tech, lang, state, city, relationship, course, technology, department, preferred_location, lang })
  });

})




// ------------------------

//------------------edit save delete---------------

connection2.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})


app.get("/edittable", (req, res) => {

  connection2.query(`select *from edittable`, (err, result) => {
    if (err) throw err;
    data = result;
    res.render('editdemo', data);
  })
})

app.get("/add", (req, res) => {

  var add = req.query
  var fname = add.fname;
  var lname = add.lname;
  var contact = add.contact;
  var address = add.address;

  connection2.query(`insert into edittable(fname,lname,contact,address)values('${fname}','${lname}','${contact}','${address}')`, (err, result) => {
    if (err) throw err;
    data = result;
    console.log("record add successfully")
  })
})

app.get("/save", (req, res) => {

  var save = req.query

  var fname = save.fname;
  var id = save.id;
  console.log(id)
  var lname = save.lname;
  var contact = save.contact;
  var address = save.address;
  connection2.query(`update edittable set fname='${fname}',lname='${lname}',contact='${contact}',address='${address}' where id='${id}'`, (err, result) => {
    if (err) throw err;
    data = result;
    // res.render('editdemo',{data});
  })
})

app.get("/delete", (req, res) => {

  var save = req.query

  var fname = save.fname;
  var id = save.id;
  console.log(id)
  var lname = save.lname;
  var contact = save.contact;
  var address = save.address;
  connection2.query(`delete from edittable where id='${id}'`, (err, result) => {
    if (err) throw err;
    data = result;
    // res.render('editdemo',{data});
  })
})

app.post("/saveall", (req, res) => {

  var sid = req.body.id;
  console.log(sid);
  console.log("in saveall")

  var add = req.body
  var fname = add.fname;
  var lname = add.lname;
  var contact = add.contact;
  var address = add.address;
  console.log(fname, lname, contact, address);
  for (let i = 0; i < fname.length; i++) {
    if (!sid[i]) {
      var sql = connection2.query(`insert into edittable(fname,lname,contact,address)values('${fname[i]}','${lname[i]}','${contact[i]}','${address[i]}')`, (err, result) => {
        if (err) throw err;
        //data=result
        console.log("record add successfully")
        // console.log(sql);
      })
    }
    else {
      connection2.query(`update edittable set fname='${fname[i]}',lname='${lname[i]}',contact='${contact[i]}',address='${address[i]}' where id='${sid[i]}'`, (err, result) => {
        if (err) throw err;
        // data=result;
        //  res.render('editdemo',data);
      })
    }
  }
})

//-------------------------------------
//--------simple pagination----------------

connection3.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})

app.get('/page', (req, res) => {
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
  connection3.query('select count(*) as numrows  from student_exp', (error, stu_data_1) => {
    if (error) throw error;
    data[0] = stu_data_1[0].numrows;
    count = Math.ceil(data[0] / limit);
    console.log(count);

  });

  connection3.query(`select *from student_exp limit ${offset},${limit}`, (error, result) => {
    if (error) { throw error; }
    data[1] = result;
    res.render('sortpage', { data: data, count: count, curr_page });
    console.log("record displayed successfully")
  });

});
//-----------------------------------------
//-------------search------------------
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
      res.render('search', { data_1: data });
    });
  }
  else {

    var firstname = "";
    var lastname = "";
    var contactno = "";
    var emailid = "";
    var cityname = "";
    var dateofbirth = "";

    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) == '!') {
        for (var j = i + 1; j <= text.length; j++) {
          if (text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&') {
            break;
          }
          else {
            var firstname = firstname + text.charAt(j);
          }
        }
      }
      else if (text.charAt(i) == '@') {
        for (var j = i + 1; j <= text.length; j++) {
          if (text.charAt(j) == '!' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&') {
            break;
          }
          else {
            var lastname = lastname + text.charAt(j);
          }
        }
      }
      else if (text.charAt(i) == '#') {
        for (var j = i + 1; j <= text.length; j++) {
          if (text.charAt(j) == '!' || text.charAt(j) == '@' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&') {
            break;
          }
          else {
            var contactno = contactno + text.charAt(j);
          }
        }
      }
      else if (text.charAt(i) == '$') {
        for (var j = i + 1; j <= text.length; j++) {
          if (text.charAt(j) == '!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&') {
            break;
          }
          else {
            var emailid = emailid + text.charAt(j);
          }
        }
      }

      else if (text.charAt(i) == '^') {
        for (var j = i + 1; j <= text.length; j++) {
          if (text.charAt(j) == '!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '&') {
            break;
          }
          else {
            var cityname = cityname + text.charAt(j);
          }
        }
      }
      else if (text.charAt(i) == '&') {
        for (var j = i + 1; j <= text.length; j++) {
          if (text.charAt(j) == '!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^') {
            break;
          }
          else {
            var dateofbirth = dateofbirth + text.charAt(j);
          }
        }
      }
    }

    con.query(`select * from student_exp where fname LIKE '%${firstname}%' AND lname LIKE '%${lastname}%' AND contact LIKE '%${contactno}%' AND email LIKE '%${emailid}%' AND city LIKE '%${cityname}%' AND dob LIKE '%${dateofbirth}%'`, function (err, data) {
      if (err) throw err;
      data_1 = data;
      res.render('search', { data_1: data });
    });
  }
});


//---------------------------------
//---------------10 tables --------------------

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'studentdb'

});


conn.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})

app.get('/stu_table', (req, res) => {
  var data = [];
  conn.query('select *from student_exp limit 0,10', (error, stu_data_1) => {
    if (error) throw error;
    data[0] = stu_data_1;

  });

  conn.query('select *from student_exp limit 10,10;', (error, stu_data_2) => {
    if (error) throw error;
    data[1] = stu_data_2;

  });
  conn.query('select *from student_exp limit 20,10;', (error, stu_data_3) => {
    if (error) throw error;
    data[2] = stu_data_3;
  });
  conn.query('select *from student_exp limit 20,10;', (error, stu_data_4) => {
    if (error) throw error;
    data[3] = stu_data_4;
  });
  conn.query('select *from student_exp limit 20,10;', (error, stu_data_5) => {
    if (error) throw error;
    data[4] = stu_data_5;
  });

  conn.query('select *from student_exp limit 20,10;', (error, stu_data_6) => {
    if (error) throw error;
    data[5] = stu_data_6;
  });

  conn.query('select *from student_exp limit 20,10;', (error, stu_data_7) => {
    if (error) throw error;
    data[6] = stu_data_7;
    //res.render('stu_table', {data});
  });
  conn.query('select *from student_exp limit 20,10;', (error, stu_data_8) => {
    if (error) throw error;
    data[7] = stu_data_8;
    //res.render('stu_table', {data});
  });
  conn.query('select *from student_exp limit 20,10;', (error, stu_data_9) => {
    if (error) throw error;
    data[8] = stu_data_9;
    //res.render('stu_table', {data});
  });

  conn.query('select *from student_exp limit 30,10;', (error, stu_data_10) => {
    if (error) throw error;
    data[9] = stu_data_10;
    res.render('stu_table', { data });
  });


});


//---------------------------------------------
app.listen(5002, () => {
  console.log('port running at ' + 5002)
});

