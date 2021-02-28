var mw = require('./my-middleware.js');
var express = require('express');
var app = express();
app.use(mw({option1:'1', option2:'2'}));
var validate = function(req,res,next){
    console.log("middleWare working");
    next();
}
app.get('/users',validate,(req,res)=>{
    console.log(req.params.user+"m,ssdd s");
})
app.listen(3000);
