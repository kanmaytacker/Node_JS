var through=require('through2');
var split=require('split');

var line_count=0;
var tr=through(function (buf,_,next){
	var line=buf.toString();
	this.push(line_count%2==0?line.toLowerCase()+'\n':line.toUpperCase()+'\n');
	line_count++;
	next();
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

