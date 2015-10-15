var http=require('http');
var through=require('through2');

var server=http.createServer(function (req,res){
	var tr=through(function(buf,_,next){
		this.push(buf.toString().toUpperCase());
		next();
	});
		req.pipe(tr).pipe(res);
});


server.listen(process.argv[2]);


