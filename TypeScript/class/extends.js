"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    soud() {
        console.log(`${this.name} make a sound`);
    }
    showInfo() {
        console.log(`${this.name} va ${this.id}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        const id = Math.random() * 10;
        super(name, id);
    }
    soud() {
        console.log("qayta ishga tushdi");
    }
}
const cat1 = new Cat("Kitty");
cat1.showInfo();
//# sourceMappingURL=extends.js.map