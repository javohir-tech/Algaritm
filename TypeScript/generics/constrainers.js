"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getName(obj) {
    return obj.length;
}
const res1 = getName("Hello world");
const res2 = getName([1, 2, 3, 4, 5]);
// const res3 = getName(100) // error
console.log(res2);
console.log(res1);
function getpropotys(obj, key) {
    return obj[key];
}
const user = {
    name: "Josh",
    age: 29,
};
const result1 = getpropotys(user, "name");
console.log(result1);
//# sourceMappingURL=constrainers.js.map