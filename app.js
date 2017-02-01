var express = require('express'); 
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); // needs explination
var port = 3000; //  needs explincation

//middleware function
app.use(function(req, res, next){
	console.log('Time: ', Date.now());
	
	next();
});

//body parsers middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//creating route 
app.get('/', function(req, res){
	res.send("hello");
});


app.get('/about', function(req, res){
	res.send("About me");
});




app.listen(port);
console.log('Server started on port '+port);

module.exports = app;

