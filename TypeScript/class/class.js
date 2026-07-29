"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    name;
    year;
    constructor(dotName, year) {
        if (typeof dotName === "string") {
            this.name = dotName;
            this.year = year;
        }
        else if (typeof dotName === "object") {
            this.name = dotName.name;
            this.year = dotName.year;
        }
    }
}
const toyota = new Car("toyota", new Date("2016-11-09"));
console.log(toyota);
const ferrari = new Car({ name: "ferrari", year: new Date() });
console.log(ferrari);
//# sourceMappingURL=class.js.map