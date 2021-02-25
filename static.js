const express = require('express');
const app =express();
const path = require('path');
const staticpath = path.join(__dirname,"/static_file");
console.log(staticpath);
app.use(express.static(staticpath));

app.get("/", (req,res)=>{
    res.send("msdmnsdnmw");
})
app.listen(3000);