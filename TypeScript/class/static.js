"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    static lastName = "Suvonov";
    constructor(name) {
        this.firstName = name;
    }
    // bu yerda this obyektga yo'nalgan bo'ladi  
    getName() {
        console.log(`${this.firstName}`);
    }
    // static methodlarda this aynana shu class ga yo'nalgan bo'ladi
    static getLastName() {
        console.log(`${this.lastName} `);
    }
}
Person.getLastName();
//# sourceMappingURL=static.js.map