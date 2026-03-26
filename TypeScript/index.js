"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cars = ["bmw", "audi", "lexus"];
const nums = [1, 2, 4, 5];
const bools = [true, false, true, false, true, true];
const toupparcase = cars.map((item) => item.toUpperCase()).filter(item => item.startsWith('b'));
const snums = nums.map(item => `Numer ${item}`);
console.log(snums);
console.log(toupparcase);
//# sourceMappingURL=index.js.map