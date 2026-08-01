type Pair<T , U> = [T , U]

const pair1 : Pair<string , number> = ["one" , 1]
const pair2 : Pair<number , boolean> = [2 , true]
console.log(pair1)
console.log(pair2)

type IUser<T> = {
    name : T
}

const user: IUser<string> ={
    name : "javohir"
}

console.log(user)

interface IPerson <T> {
    name : T

    showInfo(value : T) : void
}

const person1  : IPerson<string> = {
    name : "Javohir", 

    showInfo(value){
        console.log(`${value}`)
    }
}

console.log(person1)
person1.showInfo("salom")