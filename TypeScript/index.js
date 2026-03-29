"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persons = [
    {
        firstName: "Javohir",
        lastName: "Suvonov",
        age: 21,
        postion: "full Stack developer",
        // hoppy: "play  piano",
        cource: 4,
        expirianse: 2,
        coupuse: "east",
        greet: function (message) {
            return message;
        },
        sayHello: function (name) {
            return `Hello ${name}`;
        }
    },
];
const person1 = persons[0];
console.log(person1?.greet("salom"));
console.log(person1?.sayHello("Javohir"));
// person1!.firstName = "suvonov"
console.log(person1?.firstName);
console.log(persons);
//# sourceMappingURL=index.js.map