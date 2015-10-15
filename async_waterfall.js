var async=require('async');
var http=require('http');
var fs =require('fs');

var file_path=process.argv[2];

async.waterfall([
	function (cb){
		var body='';
		fs.readFile(file_path,function(err,body){
			if(err)
				return cb(err);
			cb(null,body);
		});
		
	},

	function(body,cb){
		var url_get=body.toString();
		var body='';
		http.get(url_get,function(res){
			res.on('data',function(chunk){
				body+=chunk.toString();
			});
			res.on('data',function(){
				cb(null,body);
			});
		}).on('error',function(err){
				cb(err);
			});
	}
],function(err,result){
		if(err) throw err;
		console.log(result);
	});


