"use strict";
/////////////// GENERICS FUNCTION ///////////////////
// function myFunction<T>(val1: T): T {
//   return val1;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function myFunction(value) {
    return { radius: value };
}
const res1 = myFunction(12);
console.log(res1);
const res2 = myFunction("45deg");
console.log(res2);
//# sourceMappingURL=index.js.map