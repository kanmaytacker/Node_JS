var http=require('http');
var async=require('async');

async.series({
	requestOne: function(callback){
		var body='';
		http.get(process.argv[2],function(res){
			res.on('data',function(chunk){
				body+=chunk.toString();
			});

			res.on('end',function(){
				callback(null,body);
			});
		}).on('error',function(err){
			callback(err);	
		});
	},

	requestTwo: function(callback){
		var body='';
                http.get(process.argv[3],function(res){
                        res.on('data',function(chunk){
                                body+=chunk.toString();
                        });

                        res.on('end',function(){
                                callback(null,body);
                        });
                }).on('error',function(err){
                        callback(err);
                });
		
	}
}, function(err,results){
	if(err) throw err;
	console.log(results);		
});
