"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task 11
class Shape {
    describe() {
        console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return 3.14 * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * 3.14 * this.radius;
    }
}
class Rectangle extends Shape {
    heigth;
    width;
    constructor(heigth, width) {
        super();
        this.heigth = heigth;
        this.width = width;
    }
    getArea() {
        return this.heigth * this.width;
    }
    getPerimeter() {
        return (this.heigth + this.width) * 2;
    }
}
//  task 12
// interface Movable {
//   position: { x: number; y: number };
//   move(x: number, y: number): void;
// }
// class Car implements Movable {
//   position: { x: number; y: number };
//   constructor(position: { x: number; y: number }) {
//     this.position = position;
//   }
//   move(x: number, y: number): void {
//     this.position = { x: x, y: y };
//     console.log(this.position);
//   }
// }
// task 13
class BankAccount {
    _balance;
    constructor(initialBalance) {
        this._balance = initialBalance;
    }
    // get balance() qo'shing
    get balance() {
        return this._balance;
    }
    // set balance() qo'shing — manfiy qiymat kiritilsa xato tashlasin
    set balance(sum) {
        if (sum < 0) {
            throw new Error("manfiy qiymat kirita olmaysiz");
        }
        else {
            this._balance = sum;
        }
    }
    logTransaction(amount) {
        console.log(`Transaction: ${amount}`);
    }
    // nima uchun kerak ozi funksiya
    deposit(amount) {
        if (amount < 0) {
            throw new Error("manfiy qiymat kirata olmaysiz!!!");
        }
        else {
            this._balance += amount;
        }
        console.log(`${this.balance} sizning depostingiz`);
    }
}
const my_bank_account = new BankAccount(1000);
my_bank_account.balance = 2000;
my_bank_account.deposit(3000);
console.log(my_bank_account.balance);
// Task 14
class Counter {
    static count = 0;
    constructor() {
        Counter.increment();
    }
    static increment() {
        this.count++;
    }
    static getCount() {
        return this.count;
    }
}
const c = new Counter();
const d = new Counter();
console.log(Counter.getCount());
// task 15
class Engine {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}
class Car {
    engine;
    constructor() {
        this.engine = new Engine();
    }
    startCar() {
        this.engine.start();
    }
    stop() {
        this.engine.stop();
    }
}
const car1 = new Car();
car1.startCar();
car1.stop();
//# sourceMappingURL=index.js.map