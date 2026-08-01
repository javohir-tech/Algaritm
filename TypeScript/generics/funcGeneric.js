"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(val) {
    return val;
}
console.log(logger(12));
function getFirstItem(args) {
    return args[0];
}
const firstNumber = getFirstItem([10, 21]);
const firstString = getFirstItem(["ali", "vali"]);
const firstUser = getFirstItem([{ name: "ali", age: 22 }]);
console.log(firstString);
//# sourceMappingURL=funcGeneric.js.map