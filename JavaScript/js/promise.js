const myMethods = {
    printName(age){
        console.log(this.name , age)
    }
}

const emp1 =  {name : 'javohir'}

const pand = myMethods.printName.bind(emp1 , 21)
pand()