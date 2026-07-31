"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    static title = "josh";
    static makeSound() {
        console.log("wow");
    }
}
class Cat extends Animal {
}
console.log(Animal.title);
Animal.makeSound();
console.log(Cat.title);
Cat.makeSound();
//# sourceMappingURL=static.js.map