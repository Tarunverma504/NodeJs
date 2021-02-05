class User{
    constructor(){
        this.name="Tarun Verma";
        this.age=18;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}
var user= new User();
console.log(user);
console.log(user.getName());
console.log(user.getAge());

class randomUser{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }

}

var users= new randomUser("Tarun Verma","19");
console.log(`randomUser ${users.getName()} , ${users.getAge()}`);