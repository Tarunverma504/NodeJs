const fs = require('fs');
const bioData={
    name: 'Tarun Verma',
    age:19,
    college:'Chitkara University'
};
 const jsonData =JSON.stringify(bioData);
 fs.writeFile("json1.json",jsonData,(err)=>{
     console.log("done");
 });

 fs.readFile("json1.json","utf8",(err,data) =>{
     console.log(JSON.parse(err));
 })