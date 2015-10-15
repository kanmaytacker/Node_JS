var express=require('express');
var app=express();

app.get('/home',function(req,res){
	console.log(process.argv[2]);

	res.end('Hello World!' +process.argv[2]);
});

app.listen(process.argv[2]);
