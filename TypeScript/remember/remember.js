"use strict";
// Type Assertion( Type Castinng)
// Type Guards
// Type Asserts
Object.defineProperty(exports, "__esModule", { value: true });
// type assertion (type casting)
// angle braket syntax
let message = "Hello world";
const wordLength1 = message.length;
const wordLength2 = message.length;
console.log(wordLength1);
console.log(wordLength2);
// type  guards
function logger(msg) {
    if (typeof msg === "string") {
        console.log(msg.toUpperCase());
    }
    else {
        console.log(msg.toFixed(2));
    }
}
logger("salom dunyo");
logger(23.333);
class Dog {
    brak() {
        console.log("woof");
    }
}
class Cat {
    meow() {
        console.log("meow");
    }
}
const getSound = (animal) => {
    if (animal instanceof Dog) {
        animal.brak();
    }
    else {
        animal.meow();
    }
};
getSound(new Dog());
getSound(new Cat());
function getInfo(vahicle) {
    if ("speed" in vahicle) {
        console.log(vahicle.speed);
    }
    else {
        console.log(vahicle.altitude);
    }
}
getInfo({ speed: 1000 });
getInfo({ altitude: 10000 });
//# sourceMappingURL=remember.js.map