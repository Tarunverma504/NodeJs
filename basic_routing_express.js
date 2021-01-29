const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello World");
})  
app.get("/user",(req,res)=>{
    res.send("Hello User");
})

app.listen(3000,()=> console.log("Express is running on port 3000"));