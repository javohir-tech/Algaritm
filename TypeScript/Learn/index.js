"use strict";
// ReturnType<T> funksiyadan qaytgan qiymat tipini olish uchun
Object.defineProperty(exports, "__esModule", { value: true });
function calc(a, b) {
    return a + b;
}
const params = [1, 2];
const res = calc(...params);
console.log(res);
//# sourceMappingURL=index.js.map