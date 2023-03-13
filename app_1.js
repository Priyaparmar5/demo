var express = require ('express'); 
var app = express(); 
app.set('view engine','ejs')

    
app.get('/', (req, res)=>{

  
    var data = {name:'Akashdeep',
        hobbies:['playing football', 'playing chess', 'cycling']}
    
    res.render('index_1', {data:data});
    });
    
    var server = app.listen(4000, function() {
        console.log('listening to port 4000')
    });
    