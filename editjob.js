var mysql = require('mysql2');
var express = require('express');
var util = require('util');
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
const query = util.promisify(connection.query).bind(connection);
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

app.post('/job', (req,response)=>{
  
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
    var languageknown=req.body.languageknown||'';
    var read=req.body.read ||'';
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
  "${course1}","${univ}","${perc}","${passing}")`, function (err, result) {
    if (err) throw err;
    console.log("record add successfully")
  });
}
else{
  for(i=0; i<course1.length; i++){
    connection.query(`INSERT INTO education_detail (candidate_id,course_name,university,percentage,passing_year) VALUES ("${appid}","${course1[i]}","${univ[i]}","${perc[i]}","${passing[i]}")`, function (err, result) {
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
// -----------------------
// var language1= '';
// if(typeof(req.body.languageknown) == 'object'){
//   language1 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values`;
// for (let i = 0; i < req.body.languageknown.length; i++) {
//   language1 += `('${appid}', '${read.includes(req.body.languageknown[i]) ? 'yes' : 'no'}', '${write.includes(req.body.languageknown[i]) ? 'yes' : 'no'}', '${speak.includes(req.body.languageknown[i]) ? 'yes' : 'no'}','${req.body.languageknown[i]}'),`;
// }
// language1 = language1.slice(0, language1.length - 1);
// } 
// else {
// language1 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) value('${appid}, '${read == req.body.languageknown ? 'yes' : 'no'}', '${write == req.body.languageknown ? 'yes' : 'no'}', '${speak == req.body.languageknown ? 'yes' : 'no'} ','${req.body.languageknown}')`;
// }

// connection.query(language1, function (err, result6) {
// if (err) throw err;
// console.log(language1)
// //response.send("record add successfully");
// console.log("record add successfully")

// });
// -----------------------------------------

  //   var sql10 = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values ('${appid}','${languageknown[i]}','${read.includes(languageknown[i])?'yes':'no'}','${write.includes(languageknown[i])?'yes':'no'}','${speak.includes(languageknown[i])?'yes':'no'}')`;
    
  //   connection.query(sql10,(err,data10)=>{
  //   if (err) throw err;
  //   })
  //   }


//
  connection.query(`INSERT INTO preferences (candidate_id,expected_ctc,current_ctc,notice_period,preferred_location,department) VALUES ("${appid}",
  "${exp}","${cur}","${notice1}","${prefloc}","${depart}")`, function (err, result) {
    if (err) throw err
   
  })

  connection.query(`INSERT INTO reference (candidate_id,references_name,references_contact,references_relation) VALUES ("${appid}",
"${nm}","${phn}","${rel}"), ("${appid}","${nm1}","${phn1}","${rel1}")`, function (err, result) {
    if (err) throw err
   
  })



//---------------------------------------

  
  connection.query(`select * from basic_detail WHERE isdel is null`, (error, data) => {
    if (error) throw error;
   // data = data;
    response.render('editjobview',{ data});
  });
  //response.redirect('/')
})

})

app.get("/getcity",(req,res)=>{
  console.log('in getcity')
  let stateid = req.query.stateid || 0;
  console.log("stateid"+ stateid);
  // connection.query(`select state_id from state where state_name='${stateid}'`,(err,res)=>
  // {
  //   data =res[0].state_id;
  //   console.log(res);
  // })
  
  var sql =connection.query(`select city_name from city where state_id = '${stateid}'`,(err,result)=>
  {
    if(err) throw err;
    res.send(result);
    console.log(result)
    res.end();
  })
//console.log(sql);
})



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
        
      });

      connection.query(sql3, (error, res) => {
        if (error) throw error;
        data1['course']=res;
     
      });

      connection.query(sql4, (error, res) => {
        if (error) throw error;
        data1['technology']=res;
       
      });

      connection.query(sql5, (error, res) => {
        if (error) throw error;
        data1['department']=res;
    
      
      });

      connection.query(sql6, (error, res) => {
        if (error) throw error;
        data1['pref_location']=res;
      
      
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
        response.render('jobform1',{data:data1});

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


app.post("/update",async(req,res)=>{

let cid = req.body.cid;
var eduid = req.body.eduid;
let expid = req.body.expid;
let refid = req.body.refid;
let pid = req.body.pid;
let langid = req.body.lang_id;


var read=req.body.read ||'';
var write=req.body.write ||'';
var speak=req.body.speak ||'';
var langname=req.body.lang ||'';

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
console.log("{course}"+course1);
console.log("eid"+eduid);
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
    connection.query(`update basic_detail set fname="${f_name} ",lname="${l_name}",designation="${designation1}", contact="${contact1}", address=" ${add1}", address2="${add2}",city= "${city1}", state="${state1}", email="${mail}",gender="${gen}",dob="${dob1}" , zipcode="${zipcode}", relationship_status="${relation}" where candidate_id="${cid}" `, (error, res) => {
      let appid = res.insertId;
      console.log(appid);
      if (error) throw error;
      console.log("data updated successfully")

    });

// //---------------------education detail------------------------

    for(let i=0;i<course1.length;i++){
    connection.query(`update education_detail set course_name="${course1[i]} ",university="${univ[i]}",percentage="${perc[i]}" , passing_year="${passing[i]}" where edu_id="${eduid[i]}" `, (error, res) => {
      if (error) throw error;
      console.log("data updated successfully")
   
    });
  }

// //-------------------work experience-------------------------
  for(var i=0;i<company.length;i++){
    connection.query(`update work_experience set company_name="${company[i]} ",designation="${desig[i]}",from_date="${f_date[i]}" , end_date="${t_date[i]}" where id_experience="${expid[i]}" `, (error, res) => {
      if (error) throw error;
      console.log("data updated successfully")
   
    });
  }
  
// ///---------------------preferences-------------------------//

    connection.query(`update preferences set expected_ctc="${exp}",current_ctc="${cur}",notice_period="${notice1}" , preferred_location="${prefloc}", department="${depart}" where candidate_id="${cid}" `, (error, res) => {
      if (error) throw error;
      console.log("data updated successfully")
   
    });

// ///---------------------references-----------------------//

    console.log('')
    var refname = req.body.name;
    for(let i=0; i<refname.length; i++){
    connection.query(`update reference set references_name="${nm[i]} ",references_contact="${phn[i]}",references_relation="${rel[i]}" where reference_id="${refid[i]}" `, (error, res) => {
      if (error) throw error;
      console.log("data updated successfully")
   
    });
  }
// console.log(sql);

//   var deletecheck =await query(`delete from languages where candidate_id='${req.body.cid}'`);
//   var language= '';
//   var lang = req.body.lang;
//   var read = req.body.read||'';
//   var write = req.body.write||'';
//   var speak = req.body.speak||'';
//   console.log("read"+read);
//   console.log("write"+write);
//   console.log("speak"+speak);

 if(typeof(req.body.lang) == 'object'){
    language = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) values`;
  for (let i = 0; i < req.body.lang.length; i++) {
    language += `('${req.body.cid}', '${read.includes(req.body.lang[i]) ? 'yes' : 'no'}', '${write.includes(req.body.lang[i]) ? 'yes' : 'no'}', '${speak.includes(req.body.lang[i]) ? 'yes' : 'no'}','${req.body.lang[i]}'),`;
  }
  language = language.slice(0, language.length - 1);
  } 
  else {
  language = `insert into languages(candidate_id, language_read, language_write,language_speak,language_name) value('${cid}, '${read == req.body.lang ? 'yes' : 'no'}', '${write == req.body.lang ? 'yes' : 'no'}', '${speak == req.body.lang ? 'yes' : 'no'} ','${req.body.lang}')`;
  }
  
  connection.query(language, function (err, result6) {
  if (err) throw err;
  console.log(language)
 
  console.log("record add successfully")
  
  });

//   //-
//   var deletecheck1 =await query(`delete from technologies where candidate_id='${req.body.cid}'`);


//   let technologies = req.body.tech;

// //technology
for (var i = 0; i < technologies.length; i++) {
  var sql = connection.query(`INSERT INTO technologies (candidate_id,tech_name, tech_expertise)values ('${req.body.cid}','${technologies[i]}', '${req.body[technologies[i]]}');`, function (err, result) {
      if (err) throw err;
  });
}
console.log("update successfully");
});



app.get('/edit', (req, response) => {
var data1={}
//-------------
connection.query(`select *from state`, (error, res) => {
  if (error) throw error;
  state=res; 
  console.log(state);

});


// connection.query("select option_name from jobdb.option_master where s_id=1;", function (err, result) {
//     if (err) throw err;
//     state = result;
//     })
    connection.query("select option_name from jobdb.option_master where s_id=2;", function (err, result) {
    if (err) throw err;
    city = result;
    
    })
    connection.query("select option_name from jobdb.option_master where s_id=3;", function (err, result) {
    if (err) throw err;
    relationship = result;
    
    })
    connection.query("select option_name from jobdb.option_master where s_id=4;", function (err, result) {
    if (err) throw err;
    course = result;
    console.log(course);
    })

    connection.query("select option_name from jobdb.option_master where s_id=5;", function (err, result) {
      if (err) throw err;
      technology = result;
            
    })

    connection.query("select option_name from jobdb.option_master where s_id=6;", function (err, result) {
    if (err) throw err;
    department = result;
    
    })
    connection.query("select option_name from jobdb.option_master where s_id=7;", function (err, result) {
    if (err) throw err;
    preferred_location = result;
    
    })
    connection.query("select option_name from jobdb.option_master where s_id=8;", function (err, result) {
    if (err) throw err;
    language = result;
    console.log(language);
    })

    //------------------
    var editid= req.query.id;
    console.log(editid);
    var sql1 = `select *from basic_detail where candidate_id=${editid}`;
    var sql2 = `select *from education_detail where candidate_id=${editid}`;
    var sql3 = `select *from work_experience where candidate_id=${editid}`;
    var sql4 = `select *from preferences where candidate_id=${editid}`;
    var sql5 = `select *from reference where candidate_id=${editid}`;
    var sql6 = `select *from languages where candidate_id=${editid}`;
    var sql7 = `select *from technologies where candidate_id=${editid}`;


    connection.query(sql2,(error,result)=>{
  
      if(error) { throw error;}
      data2 = result;
    })

    connection.query(sql5,(error,result)=>{
      
      if(error) { throw error;}
      data5= result;
    })

    connection.query(sql6,(error,result)=>{
        
      if(error) { throw error;}
      lang= result;
    })

    connection.query(sql7,(error,result)=>{
        
      if(error) { throw error;}
      tech= result;
    })


    connection.query(sql3,(error,result)=>{
        
      if(error) { throw error;}
      data3 = result;
    })

    connection.query(sql4,(error,result)=>{
        
      if(error) { throw error;}
      data4 = result;
    })

    connection.query(sql1,(error,result)=>{
        
    if(error) { throw error;}
    data = result;
    response.render('editform',{data,data2,data3,data4,data5,tech,lang,state,city, relationship, course,technology, department, preferred_location,lang })
});
})


//--------------search-------------------------

app.listen(5002, () => {
  console.log('port running at ' + 5002)
});


