var http=require('http')
var myServer=http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<style> h1 {color:blue;text-align:center;padding:300px}</style>");
response.write("<a href=\"http://www.google.com\"><h1><b>Hello</b> World</h1>");
response.end();
});

myServer.listen(3000);
console.log("Go to http://localhost:3000 on your browser");
