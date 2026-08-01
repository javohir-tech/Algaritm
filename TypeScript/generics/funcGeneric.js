"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatFunc(val1, val2, val3) {
    return { ...val1, ...val2, ...val3 };
}
console.log(concatFunc({ name: "Jonh" }, { role: "Dev" }, { age: 22 }));
//# sourceMappingURL=funcGeneric.js.map