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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
	res.render('index',{

		title: 'hello my name is sohail',
		showTitle: true,
		people: ['john', 'sara', 'ali']
	});
});


app.get('/about', function(req, res){
	res.render('about');
});

app.get('/experience', function(req, res){
	res.render("experience");
});

app.get('/school', function(req, res){
	res.render("school");
});

app.get('/contact', function(req, res){
	res.render("contact");
});




app.listen(port);
console.log('Server started on port '+port);

module.exports = app;

