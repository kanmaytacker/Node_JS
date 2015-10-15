var http=require('http');
var out1="";
var out2="";
var out3="";
var end_count=0;


http.get(process.argv[2],function(response){
	response.setEncoding('utf8');
	response.on('data',function(data){
		out1+=data;
	});
	response.on('end',function(){
		end_count++;
		if(end_count==3)
			print();
	});
	response.on('error',console.error);
});

http.get(process.argv[3],function(response){
        response.setEncoding('utf8');
        response.on('data',function(data){
                out2+=data;
        });
        response.on('end',function(){
                end_count++;
		if(end_count==3)
                        print();
        });
});


http.get(process.argv[4],function(response){
        response.setEncoding('utf8');
        response.on('data',function(data){
                out3+=data;
		
        });
        response.on('end',function(){
                end_count++;
		if(end_count==3)
                        print();
        });
});


function print()
{
	console.log(out1);
	console.log(out2);
	console.log(out3);
}


