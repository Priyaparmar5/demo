var express = require ('express'); 
var app = express(); 
app.set('view engine','ejs')
app.get ("/", function (req,res) {
	res.render ( "index.ejs" );	
	} );
app.listen(3000 , function () {
	console.log ("server is listening!!!");
} );;;