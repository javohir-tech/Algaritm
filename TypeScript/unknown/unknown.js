"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value.toFixed(2);
    }
    return "unknown type";
}
console.log(logger("salom"));
console.log(logger(23.345));
console.log(logger(true));
//# sourceMappingURL=unknown.js.map