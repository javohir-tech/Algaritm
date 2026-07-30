class Animal {
    protected name : string

    constructor(name: string){
        this.name = name
    }

    wow(){
        console.log(this.name)
    }
}

class Dog extends Animal {
    sound(){
        console.log(`${this.name}`)
    }
}

const dog = new Dog("Reks")
dog.sound()
