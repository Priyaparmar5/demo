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
  database: 'jobdb'

});

connection.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})
var sql=`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="state";`;

var sql1=`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="city";`;
var sql2=`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="relationship";`;
var sql3 =`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="course";`;
var sql4 =`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="technology";`;
var sql5 =`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="department";`;
var sql6 =`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="pref_location";`;
var sql7 =`select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="language";`;

app.post('/', (req,response)=>{
  
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
    var languageknown=req.body.languageknown;
    var read=req.body.read;
    var write=req.body.write ||'';
    var speak=req.body.speak ||'';
    console.log(read);
    console.log(write);
    console.log(speak);
    

  let technologies = req.body.technology1;
  console.log(technologies);
  for(let i=0; i<technologies.length; i++)
  {
    console.log(req.body[technologies[i]]);
  }



var sql8 = `INSERT INTO basic_detail (fname,lname,designation, contact, address, address2,city, state, email,gender,dob, zipcode, relationship_status) VALUES ("${f_name} ","${l_name}","${designation1}" , "${contact1}"," ${add1}", "${add2}", "${city1}" , "${state1}", "${mail}", "${gen}","${dob1}" ,"${zipcode}" ,"${relation}")`;

// var sql9 = `INSERT INTO education_detail (candidate_id,course_name,university,percentage,passing_year) VALUES ("${appid}",
//   "${course1}","${univ}","${passing}","${perc}")`;

connection.query(sql8, function (err, result) {
  if (err) throw err
  
  console.log('Row has been updated')
  let appid = result.insertId;
  console.log(appid)

  if(typeof(course1,univ,passing,perc)=='string'){
  connection.query(`INSERT INTO education_detail (candidate_id,course_name,university,percentage,passing_year) VALUES ("${appid}",
  "${course1}","${univ}","${passing}","${perc}")`, function (err, result) {
    if (err) throw err;
    console.log("record add successfully")
  });
}
else{
  for(i=0; i<course1.length; i++){
    connection.query(`INSERT INTO education_detail (candidate_id,course_name,university,percentage,passing_year) VALUES ("${appid}","${course1[i]}","${univ[i]}","${passing[i]}","${perc[i]}")`, function (err, result) {
    if (err) throw err;
    console.log('record add successfully');
  });
  }
}
  if(typeof(comp,desig,f_date,t_date)=='string'){
    connection.query(`INSERT INTO work_experience (candidate_id,company_name,designation,from_date,end_date) VALUES ("${appid}",
    "${comp}","${desig}","${f_date}","${t_date}")`, function (err, result) {
      if (err) throw err;
      console.log("record add successfully");
    });
  }
  else{
    for(i=0; i<comp.length; i++){
      connection.query(`INSERT INTO work_experience (candidate_id,company_name,designation,from_date,end_date) VALUES ("${appid}","${comp[i]}","${desig[i]}","${f_date[i]}","${t_date[i]}")`, function (err, result) {
      if (err) throw err;
      console.log('record add successfully');
    });
    }

}

//technology
for (var i = 0; i < technologies.length; i++) {
  var sql = connection.query(`INSERT INTO technologies (candidate_id,tech_name, tech_expertise)values ('${appid}','${technologies[i]}', '${req.body[technologies[i]]}');`, function (err, result) {
      if (err) throw err;
  });
}
console.log(sql);

//language r/w/s
//var lang= '';
// for(var i=0;i<languageknown.length;i++){
//   var sql10 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values ('${appid}','${languageknown[i]}','${read.includes(languageknown[i])?'yes':'no'}','${write.includes(languageknown[i])?'yes':'no'}','${speak.includes(languageknown[i])?'yes':'no'}')`;
  
//   connection.query(sql10,(err,data10)=>{
//   if (err) throw err;
//   })
//   }
var language= '';
if(typeof(req.body.languageknown) == 'object'){
  language = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values`;
for (let i = 0; i < req.body.languageknown.length; i++) {
  language += `('${appid}', '${read.includes(req.body.languageknown[i]) ? 'yes' : 'no'}', '${write.includes(req.body.languageknown[i]) ? 'yes' : 'no'}', '${speak.includes(req.body.languageknown[i]) ? 'yes' : 'no'}','${req.body.languageknown[i]}'),`;
}
language = language.slice(0, language.length - 1);
} 
else {
language = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) value('${appid}, '${read == req.body.languageknown ? 'yes' : 'no'}', '${write == req.body.languageknown ? 'yes' : 'no'}', '${speak == req.body.languageknown ? 'yes' : 'no'} ','${req.body.languageknown}')`;
}

connection.query(language, function (err, result6) {
if (err) throw err;
console.log(language)
//response.send("record add successfully");
console.log("record add successfully")

});

  //   var sql10 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values ('${appid}','${languageknown[i]}','${read.includes(languageknown[i])?'yes':'no'}','${write.includes(languageknown[i])?'yes':'no'}','${speak.includes(languageknown[i])?'yes':'no'}')`;
    
  //   connection.query(sql10,(err,data10)=>{
  //   if (err) throw err;
  //   })
  //   }


//
  connection.query(`INSERT INTO preferences (candidate_id,expected_ctc,current_ctc,notice_period,preferred_location) VALUES ("${appid}",
  "${exp}","${cur}","${notice1}","${prefloc}")`, function (err, result) {
    if (err) throw err
   
  })

  connection.query(`INSERT INTO reference (candidate_id,references_name,references_contact,references_relation) VALUES ("${appid}",
"${nm}","${phn}","${rel}"), ("${appid}","${nm1}","${phn1}","${rel1}")`, function (err, result) {
    if (err) throw err
   
  })

//app.post('/page', (req,res)=>{


//---------------------------------------

  
  connection.query(`select * from basic_detail WHERE isdel is null`, (error, data) => {
    if (error) throw error;
   // data = data;
    response.render('jobview',{ data});

  });
  //response.redirect('/')
})

})

app.get("/getcity",(req,res)=>{
  let stateid = req.query.stateid || 0;
  console.log(stateid);
  connection.query(`select * from city where state_id = '${stateid}'`,(err,result)=>
  {
    if(err) throw err;
    res.send(result);
    res.end();
  })
})




// app.get('/delete',(req,res)=>{
//   var id  = req.query.deleteid;
//   console.log(id);
//   con.query(`UPDATE candidate_basic_info SET raw = '1' WHERE c_id ='${id}';`, function (err, result) {
//       if (err) throw err;
//       res.send(result);
//   });
// })

app.get("/dltview",(req,res)=>{
  let id = req.query.dltid || 0;
  console.log(id);
  connection.query(`select *from basic_detail WHERE isdel ='${id}';`,(err,result)=>
  {
    if(err) throw err;
    res.send(result);
    res.end();
  })
})

//
app.get("/delete",(req,res)=>{
  let id = req.query.dltid || 0;
  console.log(id);
  connection.query(`UPDATE basic_detail SET isdel = '1' WHERE candidate_id ='${id}';`,(err,result)=>
  {
    if(err) throw err;
    res.send(result);
    res.end();
  })
})
//multiple
app.get("/dlt",(req,res)=>{
  let id = req.query.cid ;
  console.log(id);
  connection.query(`UPDATE basic_detail SET isdel = '1' where candidate_id in (${id});`,(err,result)=>
  {
    if(err) throw err;
    res.send(result);
    res.end();
  })
})


app.get('/job', (req, response) => {
var data1={};
let f_name = req.query.fname;
let l_name = req.query.lname;
let designation1 = req.query.designation;
let add1 = req.query.address;
let add2 = req.query.add2;
let contact1 = req.query.contact;
let relation = req.query.relationship;
let city1 = req.query.city;
let mail = req.query.email;
let state = req.query.state||"";

 
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

connection.query(`select *from state`, (error, res) => {
  if (error) throw error;
  data1['state']=res; 

});

    // connection.query(sql, (error, res) => {
    //     if (error) throw error;
    //     data1['state']=res;
    //    // console.log(data1);
      
    //   });

      connection.query(sql2, (error, res) => {
        if (error) throw error;
        data1['relationship']=res;
        //console.log(data1);
      
      });

      connection.query(sql3, (error, res) => {
        if (error) throw error;
        data1['course']=res;
     //   console.log(data1);
      
      });

      connection.query(sql4, (error, res) => {
        if (error) throw error;
        data1['technology']=res;
       // console.log(data1);
      
      });

      connection.query(sql5, (error, res) => {
        if (error) throw error;
        data1['department']=res;
      //  console.log(data1);
      
      });

      connection.query(sql6, (error, res) => {
        if (error) throw error;
        data1['pref_location']=res;
        //console.log(data1);
      
      });

      connection.query(sql7, (error, res) => {
        if (error) throw error;
        data1['language']=res;
     //   console.log(data1);
      
      });
     
      connection.query(sql1, (error, res) => {
        if (error) throw error;
        data1['city']=res;
       // console.log(data1);
        response.render('jobform',{data:data1});

      });
});

app.get('/page', (req, res) => {
  var data = [];
  var count;
  var curr_page;
  page = req.query.num || 1;
  var ajax = req.query.ajax ||false;
  curr_page = parseInt(req.query.num);
  limit = 25;
  offset = (page - 1) * limit;
  if (isNaN(offset)) {
    offset = 0;
  }
  connection.query('select count(*) as numrows  from basic_detail', (error, stu_data_1) => {
    if (error) throw error;
    data[0] = stu_data_1[0].numrows;
    count = Math.ceil(data[0] / limit);
    
    console.log(count);

  });

  connection.query(`select *from basic_detail limit ${offset},${limit}`, (error, result) => {
    if (error) { throw error; }
    data = result;
    if(ajax == false){
    res.render('viewjob', { data: data, count: count , curr_page});
    }else{
      res.json(data);
    }
    console.log("record displayed successfully")
  });

});



app.get('/search', (req, response) => {

//-----------page------------
// var data = [];
// var count;
// var curr_page;
// search = req.query.num || 1;
// var ajax = req.query.ajax ||false;
// curr_page = parseInt(req.query.num);
// limit = 25;
// offset = (search - 1) * limit;
// if (isNaN(offset)) {
//   offset = 0;
// }
// connection.query('select count(*) as numrows  from basic_detail', (error, stu_data_1) => {
//   if (error) throw error;
//   data[0] = stu_data_1[0].numrows;
//   count = Math.ceil(data[0] / limit);
  
//   console.log(count);

// });





  //-----search--------------
  var text = req.query.search || 1;


  var firstname = "";
  var lastname = "";
  var contactno = "";
  var emailid = "";
  var cityname = "";
  var dateofbirth = "";

          
    var designation1 = "";
   
     var  address = "";
      var address2 = "";
       var statename = "";
        var gender = "";  
        var zipcode = "";
        var relation = "";

  for(var i=0; i<text.length; i++)
  {
      if(text.charAt(i) == '!')
      {
          for(var j=i+1; j<=text.length; j++)
          {
            if(text.charAt(j) =='@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&' || text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
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
              if(text.charAt(j) =='!' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
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
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
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
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '&'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
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
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '&'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
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
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^'|| text.charAt(j) == '+' || text.charAt(j) == '|'  || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var dateofbirth = dateofbirth + text.charAt(j);
              }
          }
      }
      //
      else if(text.charAt(i) == '{')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var designation1 = designation1 + text.charAt(j);
              }
          }
      }
      else if(text.charAt(i) == '*')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '+' || text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':'|| text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var address = address + text.charAt(j);
              }
          }
      }
      else if(text.charAt(i) == '~')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?'|| text.charAt(j) == ':')
              {
                  break;
              }
              else
              {
                  var address2 = address2 + text.charAt(j);
              }
          }
      }
      else if(text.charAt(i) == '?')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^'|| text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == ':'|| text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var statename = statename + text.charAt(j);
              }
          }
      }
      else if(text.charAt(i) == ':')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^' || text.charAt(j) == '+'|| text.charAt(j) == '|' || text.charAt(j) == '?' || text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var gender = gender + text.charAt(j);
              }
          }
      }
      
      else if(text.charAt(i) == '+')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^'|| text.charAt(j) == '|' || text.charAt(j) == '?' || text.charAt(j) == ':0'|| text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var zipcode = zipcode + text.charAt(j);
              }
          }
      }
      else if(text.charAt(i) == '|')
      {
          for(var j=i+1; j<=text.length; j++)
          {
              if(text.charAt(j) =='!' || text.charAt(j) == '@' || text.charAt(j) == '#' || text.charAt(j) == '$' || text.charAt(j) == '%' || text.charAt(j) == '^'|| text.charAt(j) == '+' || text.charAt(j) == '?' || text.charAt(j) == ':'|| text.charAt(j) == '~')
              {
                  break;
              }
              else
              {
                  var relation = relation + text.charAt(j);
              }
          }
      }
  }


  connection.query(`select * from basic_detail where fname LIKE '%${firstname}%' AND lname LIKE '%${lastname}%' AND designation LIKE '%${designation1}%' AND contact LIKE '%${contactno}%' AND address LIKE '%${address}%'  AND address2 LIKE '%${address2}%' AND city LIKE '%${cityname}%' AND state LIKE '%${statename}%'  AND email LIKE '%${emailid}%' AND gender LIKE '%${gender}%'  AND dob LIKE '%${dateofbirth}%' AND zipcode LIKE '%${zipcode}%' AND relationship_status LIKE '%${relation}%'   isdel not null`, function (err, data) {
      if (err) throw err;
     // data = data;
     response.render('jobview', { data});
  });
  
  

  // connection.query(`select *from basic_detail limit ${offset},${limit}`, (error, result) => {
  //   if (error) { throw error; }
  //   data = result;
  //   if(ajax == false){
  //   res.render('jobview', { data: data, count: count , curr_page});
  //   }else{
  //     response.json(data);
  //   }
  //   console.log("record displayed successfully")
  // });
});
//--------------search-------------------------

app.listen(5002, () => {
  console.log('port running at ' + 5002)
});


