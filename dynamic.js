const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');
app.engine( "hbs", exphbs({  extname: "hbs", defaultLayout: false }));
app.set('view engine', '.hbs');
const staticpath = path.join(__dirname,"/views")
app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.render("index",{
        name:"Dynamic",
    });
    
})
app.listen(3000, ()=> console.log("server is running"));