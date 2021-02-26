const  fs = require('fs');
const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    const rstream = fs.createReadStream('bufferdata.txt');
    rstream.on("data",(chunckdata)=>{
        res.write(chunckdata);
    });
    rstream.on("end",()=>{
        res.end();
    })
    rstream.on("error",(err)=>{
        console.log("File Not Found");
    })
})
app.listen(3000,()=>console.log("Server is running"));