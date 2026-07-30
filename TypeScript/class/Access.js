"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    sound() {
        console.log(`${this.name}`);
    }
}
const dog = new Dog("Reks");
dog.sound();
//# sourceMappingURL=Access.js.map