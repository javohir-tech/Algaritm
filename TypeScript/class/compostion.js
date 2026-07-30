"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    constructor(id) {
        this.id = id;
    }
    showId() {
        console.log(`your id is ${this.id}`);
    }
}
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee {
    user;
    person;
    constructor(user, person) {
        this.user = user;
        this.person = person;
    }
}
const employee1 = new Employee(new User(12), new Person("Javohir"));
console.log(employee1);
employee1.user.showId();
//# sourceMappingURL=compostion.js.map