const express= require('express');
const app = express();
var validate = function(req,res,next)
{
    console.log("Validate is running");
    next();
}
var validateUser = function(req,res,next)
{
    console.log("validateUser is running");
    next();
}

app.get("/",validate,(req,res)=>{
    res.send("Hello middleware");
})

app.get("/user",validateUser,(req,res)=>{
    res.send("Hello Middleware User");
})

app.listen(3000);