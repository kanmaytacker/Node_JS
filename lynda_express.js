var express=require('express');
var app=express();
var routes=require('./routes');

app.set('view engine','ejs');
app.locals.pagetitle='Awesome';

app.get('/',routes.index);
app.get('/about',routes.about);
var server=app.listen(3000,function(){
	console.log('Go to 3000');
});
