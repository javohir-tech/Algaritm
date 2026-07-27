"use strict";
// function logger(value: unknown) {
//   // unknown anyga qaraganda ancha havfsiz sabab uni ishlatishdan oldin type narowing qilip olish kerak
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value.toFixed(2);
//   }
Object.defineProperty(exports, "__esModule", { value: true });
//   return "unknown type";
// }
// console.log(logger("salom"));
// console.log(logger(23.345));
// console.log(logger(true));
// let result: unknown = "salom";
// let res: number = result as number;
// console.log(res)
let person1 = {
    firstName: "Javohir",
    age: 22,
};
if (typeof person1 === "object") {
    const obj = person1;
    console.log(obj.name);
}
//# sourceMappingURL=unknown.js.map