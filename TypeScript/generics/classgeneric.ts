class User<T , U> {
    private name : T

    constructor(name: T){
        this.name = name
    }

    showInfo(value : T) {
        console.log(value)
    }

    showAge(age : U) {
        console.log(age)
    }
}

const user1 = new User<string , number>("Javohir")
console.log(user1)
user1.showInfo("salom")
user1.showAge(22)

