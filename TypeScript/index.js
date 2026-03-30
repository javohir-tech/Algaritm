"use strict";
// Asserts
Object.defineProperty(exports, "__esModule", { value: true });
// type assertion
// const message : unknown = "hello world"
// const len : number = (<string>message).length
// const leng : number = (message as string).length
// const uzunlik : string =  message as string
// const uzun : string = <string>message
// console.log(uzun.length)
// console.log(uzunlik.length)
// console.log(len)
// console.log(leng)
// Type guards
// class Dog {
//   wow() {
//     console.log("wow");
//   }
// }
// class Cat {
//   meow() {
//     console.log("meow");
//   }
// }
// function makeSound(value: Dog | Cat) {
//   if (value instanceof Dog) {
//     value.wow();
//   } else if (value instanceof Cat) {
//     value.meow();
//   }
// }
// makeSound(new Dog());
// makeSound(new Cat());
// type Car = { speed: number };
// type Plan = { high: number };
// function print(avtomabil: Car | Plan) {
//   if("speed" in avtomabil){
//     console.log(avtomabil.speed)
//   }else{
//     console.log(avtomabil.high)
//   }
// }
// print({speed : 200})
// print({high : 300})
// Type Assertion
function throwError(err) {
    throw new Error(err);
}
function isNumber(value) {
    if (typeof value !== "number") {
        throwError("value is not number");
    }
}
// const a: unknown = "29";
let a = 29;
let b = 23.3455;
isNumber(a);
isNumber(b);
console.log(a + 10);
console.log(typeof b.toFixed(2));
//# sourceMappingURL=index.js.map