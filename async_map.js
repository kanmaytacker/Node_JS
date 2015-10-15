var http=require('http');
var async=require('async');

var urls=[process.argv[2],process.argv[3]];

async.map(urls,function(item,next){
	var body='';
	http.get(item,function(res){
		res.on('data',function(chunk){
			body+=chunk.toString();
		});

		res.on('end',function(){
			next(null,body);
		});
	}).on('error',function(err){
		next(err);		
	});
},

	function(err,results){
		if(err)
			return console.log(err);
		console.log(results);
	}
);
