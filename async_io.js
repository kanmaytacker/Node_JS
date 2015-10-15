var fs=require('fs');
var path=process.argv[2];

fs.readFile(path,function (err,contents)
{
var text=(contents.toString()).split('\n');
var count=text.length-1;
console.log(count);
});

