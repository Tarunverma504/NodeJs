const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("append / random to get Data");
    }

    else if(req.url == '/random'){
       // res.end("User");
    fs.readFile("randomdata.json","utf8",(err,data)=>{
        console.log(data);
        res.end(data);
    });
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1> 404 error page not found</h1>")
    }
})

server.listen(3000,()=>console.log("Server is running"));