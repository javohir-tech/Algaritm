"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name}`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("moew");
    }
}
const cat1 = new Cat("Kitty");
cat1.makeSound();
cat1.move();
//# sourceMappingURL=abstract.js.map