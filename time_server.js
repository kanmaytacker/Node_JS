var net=require('net');

function pad(value){
	if(value<=9)
		return '0'+value;
	else
		return value;
}

function getTime(){
	var date=new Date();
	var time=date.getFullYear()+"-"+pad(date.getMonth()+1)+"-"
		+pad(date.getDate())+" "+pad(date.getHours())
		+":"+pad(date.getMinutes());
	console.log(time);
	return time;
	
}
var server=net.createServer(function(socket){
	socket.end(getTime());
});

server.listen(process.argv[2]);
