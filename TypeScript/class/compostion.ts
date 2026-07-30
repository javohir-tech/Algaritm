class User {
    id : number 

    constructor(id:number){
        this.id =  id
    }

    showId(){
        console.log(`your id is ${this.id}`)
    }
}


class Person {
    name : string 

    constructor(name : string){
        this.name = name
    }

}


class Employee {
    user : User ;
    person : Person ;

    constructor(user : User , person : Person){
        this.user = user
        this.person = person
    }
    
}

const employee1 =new Employee(new User(12) , new Person("Javohir"))
console.log(employee1)
employee1.user.showId()