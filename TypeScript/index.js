"use strict";
/////////////// GENERICS FUNCTION ///////////////////
// function myFunction<T>(val1: T): T {
//   return val1;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const res1 = myFunction<number>(2.9873)
// const res2 = myFunction<string>("hello world")
// const res3 = myFunction<boolean>(true)
// console.log(res1.toFixed(2))
// console.log(res2.toUpperCase())
// console.log(res3.valueOf())
function throwError(text) {
    throw new Error(text);
}
function marge(val) {
    return val[0];
}
const res1 = marge([1.234, 2, 3, 4, 5]);
console.log(res1.toFixed(2));
const res2 = marge(["bir", "ikki"]);
console.log(res2.toUpperCase());
const res3 = marge([{ name: "Javohir", age: 21, isMerried: false }]);
console.log(res3);
//# sourceMappingURL=index.js.map