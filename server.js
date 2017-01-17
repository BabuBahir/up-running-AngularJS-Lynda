 var express = require('express');
 var session = require('express-session');
 var bodyParser = require('body-parser');
 var app = express();
   
 app.set('views', __dirname + '/views');
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'ejs');

 app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static('public')); // all static files here
 var sess;

 var port = process.env.PORT || 3000; // added port

 app.get('/',function(req,res){
 	res.render('index.html');
 });

 app.listen(port, function() {
     console.log("App Started on PORT 3000");
 });
 