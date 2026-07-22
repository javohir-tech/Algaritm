"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chechAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
console.log(chechAdult(22));
const person = {
    firstName: "Javohir",
    lastName: "Suvonov",
    age: 22,
    skills: {
        languages: "javascript",
    },
};
const getName = (data) => {
    return `${data.firstName}  ${data.lastName}`;
};
const person1 = getName(person);
console.log(person1);
//# sourceMappingURL=index.js.map