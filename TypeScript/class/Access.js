"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    wow() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    sound() {
        console.log(`${this.name} 1`);
    }
}
class SmallDog extends Dog {
    sound() {
        super.sound();
        console.log(this.name + "2");
    }
}
// const dog = new Dog("Reks")
// dog.sound()
const smallDog = new SmallDog("reks");
smallDog.sound();
//# sourceMappingURL=Access.js.map