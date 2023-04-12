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




connection.connect((err) => {
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


app.listen(5000, () => {
    console.log('port running at ' + 5000)
  });
  