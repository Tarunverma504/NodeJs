function student(){
    this.name ="Tarun Verma";
    this.age=19;
}

student.prototype={
    address:"Chandigarh",
    getName:function(){
        return this.name;
    }
}
var stud= new student();
console.log(stud);
console.log(stud.getName());
console.log(stud.address);
console.log(stud.age);
