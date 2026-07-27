"use strict";
// interface Person {
//   firstName: string;
//   lastName: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const person1 = {
    firstName: "Javohir",
    age: 22,
    logger: function (message) {
        console.log(`${this.firstName} ${message}`);
    },
};
console.log(person1.firstName);
person1.logger("salom");
//# sourceMappingURL=interface.js.map