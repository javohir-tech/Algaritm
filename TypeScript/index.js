"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Myfunction(value) {
    return value;
}
console.log(Myfunction(5));
// const arr: (number | string)[] = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5];
// const users: (IUser & {isMarried :  boolean})[] = [
//   {
//     name: "Javohir",
//     age: 21,
//     isMarried : false
//   },
// ];
const users = [
    {
        name: "Javohir",
        age: 21,
        isMarried: false,
    },
];
console.log(users);
var Person;
(function (Person) {
    Person[Person["ADMIN"] = 0] = "ADMIN";
    Person[Person["MANAGER"] = 1] = "MANAGER";
    Person[Person["USER"] = 2] = "USER";
})(Person || (Person = {}));
const companyusers = [
    {
        position: Person.ADMIN,
        age: 21,
    },
];
console.log(companyusers);
//# sourceMappingURL=index.js.map