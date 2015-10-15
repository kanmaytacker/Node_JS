var http=require('http');
http.get(process.argv[2],function (response){
	var result="";
	response.setEncoding('utf8');
	response.on('error',console.error);
	response.on('data',function(data){
		result+=data;
		//console.log(data);
	});
	response.on('end',function(){console.log(result.length);console.log(result);});
});
