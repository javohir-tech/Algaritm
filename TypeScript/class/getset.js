"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    _salary;
    set salary(sum) {
        this._salary = sum * 100;
    }
    get salary() {
        return this._salary;
    }
}
const employee1 = new Employee();
employee1.salary = 10;
let salary = employee1.salary;
console.log(salary);
//# sourceMappingURL=getset.js.map