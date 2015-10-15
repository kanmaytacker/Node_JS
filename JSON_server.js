var http=require('http');
var url=require('url');


var routes={
	'/api/parsetime': function(parsed_url){
		var date=new Date(parsed_url.query.iso);
		return {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	},

	'/api/unixtime': function(parsed_url){
		return {"unixtime":(new Date(parsed_url.query.iso)).getTime()};
	}
}

var server=http.createServer(function(req,res){
	var parsed_url=url.parse(req.url,true);
	var resource=routes[parsed_url.pathname];
	if(resource){
		res.writeHead(200,{'Content-Type':'text/json'});
		res.end(JSON.stringify(resource(parsed_url)));
		
	}
	else{
		res.writeHead(404);
		res.end();
	}
});


server.listen(process.argv[2]);
