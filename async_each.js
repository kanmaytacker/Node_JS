Var http=require('http');
var async=require('async');

var urls=[process.argv[2],process.argv[3]];

async.each(urls,function(item,next){
	http.get(item,function(res){
		res.on('end',function(){
			next();
		});
	}).on('error',function(err){             
                next(err);
        });
},

	function(err){
		if(err)
			console.log(err);
	}
);
