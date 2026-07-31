"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    static lastName = "Suvonov";
    constructor(name) {
        this.firstName = name;
    }
    static getFullName() {
        console.log(`${this.lastName} ${this.name}`);
    }
}
Person.getFullName();
//# sourceMappingURL=static.js.map