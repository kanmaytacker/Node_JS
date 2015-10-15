var http=require('http');
var bl=require('bl');

var result=[];
var end_count=0;


for(var i=0;i<3;i++)
	http_get(i);

function print(){
	for(var i=0;i<3;i++)	
		console.log(result[i]);
}

function http_get(index){
	http.get(process.argv[2+index],function(response){
		response.pipe(bl(function(err,data){
			if(err)
				return console.error(err);
			data=data.toString();
			result[index]=data;
			end_count++;
			if(end_count== 3)
				print();
			
		}));
	});
}
