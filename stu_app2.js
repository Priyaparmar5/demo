var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine','ejs')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'studentdb'

});


var dob = ['2001-05-05','2002-06-05','2002-05-15','2001-02-01','2000-03-03','2000-05-25','2000-05-15'];
var fname = ['priya','rahu','Tanya','Abhishek','Priyanka','Adity','divya','Ami','tanvi','mahes','Ishita','ROHI','vani','yas','Anjal','Anki','Shrey','shyam','riya','Deepak','Aryan','Aishwarya','Raj','Gayatri','Arjun','varsha','Manoj','Ira','ankur','sanjana','akash','Niharika','Karan','Nikita','rakesh','natasha','Sam','Neha','Naveen','shivangi','Ashish','ramya','Vinay','Isha','Parth','ananya','Mayank','shivani','vivek','Sakshi','Aaditya','Aswini','Neeraj','Suhani','Abhinav','Pavithra','Soham','seema','Pranav','Anusha','Rohan','simran','ajith','nishi','ABHI','Anushri','PRATEEK','Ayushi','Raghav','Radhika','Rishabh','tanu','Vaibhav','krithika','jay','Anisha','Kunal','Akansha','vishal','Sadaf','vikas','Nishita','Raju','diya','sanjay','Siya','manish','Abigail','shivam','Kalyani','Nishant','Rishita','Nitin','Aastha','Krishna','Mary','krish','sara','john','prachi','Anil','indhumathi','prince','shrinidhi','Varun','Anish','rhea','ALOK','Katherine','abdul','Rutuja','SUNNY','arti','Siddharth','debbie','vedant','Crowny','manu','manisha','MOHIT','Mahima','Arun','Aditi','Ajay','Aashna','Shashank','Tisha','Dhruv','Sam','Ram','swati','sanchit','dia','gokul','ria','Anubhav','anu','Sumit','Neelam','Deep','Priyanka','Shekhar','NISHA','Anurag','Chandralekha','Akshay','Mitali','Paaus','Dawn','shaan','Dilmini','Nikhil','kamalika','Kartik','Khushi','GIRISH','Anjana','SHAIL','Arya','Prashant','deepa','Sunil','juvina','Pratik','Angel','Deep','anamika','Lavanya','Aniket','ishika','Jatin','Lily','dinesh','Archita','pawan','Rashi','Rajeev','sarah','atul','sasashy','mayur','vaishnavi','tushar','diksha','Harish','Arusha','Avinash','Niti','Avi','vidhya','SURESH','kavya','Ajeet'];


var lname = ["Acharya","Adhvaryu","Ajmera","Ambani","Adani","Amin","Amroliwala","Asher","Bainsla","Bapodra","Barot","Bhagat","Bhakta","Bhansali","Bhanwadia","Bhatt","Bhuta","Bhuva","Bunha","Chag","Chandratre","Chandratreya","Chauhan","Chikhalia","Chinwalla","Chitalia","Choshki","Choski","Chowdhury","Chudasama","Daftary","Dalal","Daruwala","Dave","Desai","Dhaduk","Dhokia","Dholakia","Dixit","Dobaria","Doshi","Gaekwad","Gajjar","Ganatra","Gandhi","Ganjawala","Godhania","Gohil","Goradia","Goswami","Grigg","Gupta","Gupte","Hathiwala","Jadeja","Jain","Jani","Jariwala","Jobanputra","Joshi","Juthani","Kachchhi","Kagalwala","Kakadia","Kamdar","Kapadia","Karavadra","Karia","Kasana","Katira","Kotadia","Kotak","Kotecha","Kothari","Kuchhadia","Kyada","Lakhani","Lal","Lalbhai","Macwani","Makavana","Mankad","Mankodi","Mehta","Mistry","Modhwadia","Modi","Mokani","Mulani","Munim","Naik","Nayak","Odedra","Oza","Palan","Panchal","Pandya"];

var contact = ['7555069318','9355591613','7555503909','8555008504','8555387532','7555502619','8555143862','9655537541','7555316510','8555206540','8555421140','7555580908','9355537065','8555424152','8555508648','8555747912','8555324685','8555259458','9855533680','8555266384','9355580089','9755565265','9255532555','7555060301','8555601424','7555284601','9855547103','8555817596','8555284538','8555869645','7555134430','8555708843','8555702197','8555764972','9255599062','8555084646','7555155257','8555167681','8555663779','7555332761','8555436748','9755508863','9355576492','7555651347','8555660789','8555854973','9355519032','8555702425','9955503553','9355570271','9355532842','7555157162','8555192169','9655580123','7555271061','7555107564','8555235210','9955519241','9555568243','9655501037','9755593906','9555524400','8555230309','9755521434','8555944566','9455555812','8555202730','8555948378','8555106101','8555165546','8555749844','8555489208','9455504087','9655550977','9155507164','9455564651','8555306740','7555639510','7555204174','7555377452','8555600227','8555586456','9155557999','9255581995','9455546296','7555783096','7555312792','8555476246','9355564535','8555632669','8555945103','9255568526','8555747684','7555484949','7555059483','8555132205','7555650140','8555183607','7555700044','8555349519','8555143293','8555294527','9755585493','9855539737','7555596896','9055539275','7555381479','9955509399','8555742498','8555404870','8555570053','9055589666','8555380283','7555819445','8555889992','9655560382','9255523283','9155556827','7555602356','8555533545','7555917468','7555119653','7555456728','7555800400','7555226348','8555204016','9255580251','9055556154','9555542504','8555512424','7555457023','9555543149','7555326370','9655574013','7555950480','8555600986','7555525262','7555158748','7555913648','8555427122','9355579736','9955523709','8555825537','9055534609','9655566674','9155596531','8555624931','7555279547','7555748627','9355523648','7555308410','7555105795','8555678020','9955552397','9055534086','8555218215','9855585504','7555084186','8555776214','9455542027','7555448859','7555708970','8555498139','8555663772','7555741067','8555400325','8555993722','7555720013','7555875239','8555859733','8555691892','7555329607','9955508072','7555175935','9955532150','9155564484','7555542730','8555600579','8555294722','8555319443','8555347553','9355557803','7555814798','9255533989','9055574716','7555486884','7555146487','8555715547','9855517183','7555488189','7555603016','8555707856','7555073078','8555015235','7555303935','8555871799','8555605626','8555123433','7555687511','7555089615','7555357752','8555513975','8555818280','8555157390','8555293902','8555220402','9155592983','9255546036','9655556752','9755581415','7555385040','8555292902','7555278256','9155522643','8555806119','8555328378','9455545449','7555159371','8555126358','9155508154','7555818273','8555649381','8555282849','7555455538','8555288168','7555184311','8555936529','8555218310','7555525341','8555409211','7555364420','9455521662','9455518227','8555319353','8555465668','8555201678','9155502793','9555586690','7555390685','7555673870','9755598259','7555608267','8555634407','7555010779','9955535679','8555079697','8555531267','8555188492','9155538173','7555618117','8555349115','8555088261','8555775127','9155529417','9055515546','7555291880','8555839815','9955588107','8555024664','9355535935','8555503607','9355516794','7555687481','9655575782','7555031375','7555388796','8555222772','8555560915','8555623431','9755513944','8555135309','9755548591','7555326064','9855512672','7555677976','9755565300','8555139311','8555479091','7555665255','8555555218','8555665183','7555279063','9255580365','8555627411','8555628375','7555246994','7555105484','8555042455','9555583831','7555217203','8555522679','8555266102','7555643320','8555218178','9555505441','7555118552','8555251464','8555588873','7555820408','9355590221','9355505457','7555829165','7555022747','8555394611','7555361643','8555472626','7555259730','8555360106','7555533088','8555597102','8555950337','9255543920','8555153990','8555350144','9555540259','9655582336','7555419362','7555316199','9655525292','9955595189','9855583515','8555602142','9655563002','9055597439','7555016940','8555155845','7555329398','7555076558','7555273207','9955512365','8555231745','9655548346','9255564893','8555544150','7555832052','7555764273','7555846754','8555739482','7555645730','9755519674','9155563326','7555249426','9055538304','7555647318','9755592070','7555170841','9455583103','8555680017','9455557753','9655510244','8555973224','8555892045','8555692570','9455562511','8555125467','9955548320','9455575132','9055514664','9155528852','9055504339','8555436840','7555627770','8555100065','8555697687','7555957994','9655538527','7555692979','9355599157','7555547441','8555983875','7555056688','8555677580','9055510497','8555958051','8555182377','7555813543','8555618000','7555391590','8555268442','8555686709','7555467058','9055566373','7555945389','8555580203','9155550825','9255597702','9755569034','7555575431','9555560546','9555570861','7555649666','7555128326','9655504538','8555392548','7555151315','7555815047','8555109548','7555523428','8555891053','9955594549','8555482043','8555616280','9755574610','9655571049','8555954486','7555251135','9355580302','9555591629','9455564346','8555141832','9955568895','7555537401','9155547609','8555566765','7555885639','7555946616','9555554878','8555923988','9655579005','9255512370','8555226517','7555372176','7555827841','8555881430','7555325972','7555690545','7555283866','9655548235','9155524959','8555093086','7555017155','8555696332','8555179280','9355540868','9655555810','8555967591','7555440596','8555068173','9655512242','9755518905','7555418263','7555217185','9755581346','9955552718','8555973082','8555077723','9955596315','9555589226','7555277872','7555562555','8555008530','7555629167','7555604133','7555025073','8555413093','7555903993','7555839296','7555128507','7555097555','8555390106','8555359090','9555582854','9855596018','8555924481','7555250827','9955570424','7555791059','9255507719','9055511738','9855500723','9955549364','7555920756','8555715905','8555775524','9655564328','9955519031','7555250381','9755594619','9655501199','9555581565','9555528771','9155531562','9655547440','9955578222','7555441561','9855564818','8555082235','7555021062','9955503938','9955582695','9255536380','7555119062','7555866693','8555649554','8555894534','9555500749','8555380087','9455500635','7555076238','7555354460'];
var city = ['Ahmedabad','surat','Bhavnagar','Rajkot','Junagadh','Baroda','Anand'];
var email = ["priya@gmail.com","riya@gmail.com","raj@gmail.com","vishwa@gmail.com","khushi@gmail.com","nikhil@gmail.com","om@gmail.com","harsh@gmail.com","jaini@gmail.com"]

connection.connect((err)=>{
  if(err)
  throw err;
  console.log("connected");
})
  app.get("/endpoint",(req,res)=>{
      connection.query('select *from student_exp ;', function (error, results) {
          if (error) throw error;
          res.send(results);
         
  });    
  });app.listen(5000);
 
  app.get("/endpoint/limit",(req,res)=>{
    connection.query('select *from student_exp limit 0,10;', function (error, results) {
        if (error) throw error;
        res.send(results);
       
});    
});app.listen(5010);


app.post('/endpoint', function(req,res){
  for(var i=0; i<1500; i++)
  {
    var f_name = fname[Math.floor(Math.random() * fname.length)];
    var l_name = lname[Math.floor(Math.random() * fname.length)];
    var contact1 = contact[Math.floor(Math.random() * contact.length)];
    var city_1 = city[Math.floor(Math.random() * city.length)];
    var emailid = email[Math.floor(Math.random() * email.length)];
    var dob_r = dob[Math.floor(Math.random() * dob.length)];

    connection.query("insert into student_exp(fname, lname, contact, city, email,dob) values('"+f_name+"', '"+l_name+"', '"+contact1+"', '"+city_1+"','"+emailid+"','"+dob_r+"')",function(err,data){
        if(err) throw err;
        console.log('Data inserted successfully');
    })
  }
});


    app.get("/",(req,res)=>{

        var sql = "select *from student_exp  limit 10,10";
        connection.query(sql, (error,data)=>{
            if (error) throw error;
            console.log("Data Display sucessfully");
            res.render('stu_table',{data});
    });    
    });app.listen(5002);

    
    // app.get("/table",(req,res)=>{

    //     var sql = "select *from student_exp order by id limit 0,100";
    //     connection.query(sql, function (error, results) {
    //         if (error) throw error;
    //         console.log("Data Display sucessfully");
    //         res.render('stu_table1',{data});
    // });    
    // });app.listen(5000);