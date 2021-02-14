const bioData = {
    name:"Tarun Verma",
    age:19,
}

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
const objData = JSON.parse(jsonData);
console.log(objData);