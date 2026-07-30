"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    name;
    owners;
    constructor(name) {
        this.name = name;
        this.owners = [];
    }
    setOwners(ownerOrOwners) {
        if (typeof ownerOrOwners === "string") {
            this.owners.push(ownerOrOwners);
        }
        else if (typeof ownerOrOwners === "object") {
            this.owners = this.owners.concat(ownerOrOwners);
        }
    }
}
const car1 = new Car("Ferrari");
console.log(car1);
car1.setOwners("ali");
console.log(car1);
car1.setOwners(["vali", "g'ani"]);
console.log(car1);
//# sourceMappingURL=overloadMethods.js.map