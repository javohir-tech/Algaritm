"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    model;
    constructor(name) {
        this.model = name;
    }
    startEngine() {
        console.log("start drive");
    }
    drive(speed) {
        console.log(`${this.model} driving with ${speed}`);
    }
    fly(high) {
        console.log(`${this.model} driving with ${high}`);
    }
}
const honda = new Car("Honda");
honda.startEngine();
honda.drive(120);
honda.fly(220);
//# sourceMappingURL=implements.js.map