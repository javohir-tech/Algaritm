"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///// union types //////////////////
let id = 12;
id = "swgd-123";
console.log(id);
function myFunction(id) {
    console.log(`My id ${id}`);
}
myFunction(12);
myFunction("salom");
function getterFunc(message) {
    if (typeof message === "string") {
        return `hello  ${message}`;
    }
    else if (typeof message === "number") {
        return message;
    }
    return "Undefiend type" + message;
}
console.log(getterFunc("javohir"));
console.log(getterFunc(12));


//Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// console.log(getterFunc(true))
//# sourceMappingURL=index.js.map