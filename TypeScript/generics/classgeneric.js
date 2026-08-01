"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    showInfo(value) {
        console.log(value);
    }
    showAge(age) {
        console.log(age);
    }
}
const user1 = new User("Javohir");
console.log(user1);
user1.showInfo("salom");
user1.showAge(22);
//# sourceMappingURL=classgeneric.js.map