const http = require("http");
const server1= http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Node is running...</h1>");
    res.end();
}).listen(3000,()=> {console.log("Server is running");})

//var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("<h1>Node is running.</h1>");
res.end();
}).listen(8080,()=>{console.log("Server2 is running")});