"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    first_name: "Javohir",
    last_name: "Suvonov",
    age: 21,
    address: {
        country: "Uzbekistan",
    },
};
const getFullName = (data) => {
    return `${data.first_name} ${data.last_name} ${data.age}`;
};
const fullName = getFullName(person);
console.log(fullName);
//# sourceMappingURL=index.js.map