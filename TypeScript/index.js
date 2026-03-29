"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////// unknown /////////////////
function myFunction(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value.toFixed(2);
    }
    return "Unkown type";
}
console.log(myFunction("salom"));
console.log(myFunction(23.343515));
console.log(myFunction(true));
const person = {
    name: "Javohir",
    age: 21,
};
function Greet(obj) {
    const newObj = obj;
    console.log(newObj.name);
    console.log(newObj.age);
}
Greet(person);
//# sourceMappingURL=index.js.map