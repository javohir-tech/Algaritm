// task 11
abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  describe(): void {
    console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return 3.14 * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}

class Rectangle extends Shape {
  heigth: number;
  width: number;

  constructor(heigth: number, width: number) {
    super();
    this.heigth = heigth;
    this.width = width;
  }

  getArea(): number {
    return this.heigth * this.width;
  }

  getPerimeter(): number {
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
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // get balance() qo'shing
  get balance(): number {
    return this._balance;
  }

  // set balance() qo'shing — manfiy qiymat kiritilsa xato tashlasin
  set balance(sum: number) {
    if (sum < 0) {
      throw new Error("manfiy qiymat kirita olmaysiz");
    } else {
      this._balance = sum;
    }
  }

  protected logTransaction(amount: number): void {
    console.log(`Transaction: ${amount}`);
  }

  // nima uchun kerak ozi funksiya
  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("manfiy qiymat kirata olmaysiz!!!");
    } else {
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
  static count: number = 0;

  constructor() {
    Counter.increment();
  }

  static increment() {
    this.count++;
  }

  static getCount(): number {
    return this.count;
  }
}

const c = new Counter();
const d = new Counter();
console.log(Counter.getCount());

// task 15
class Engine {
  start(): void {
    console.log("start");
  }

  stop(): void {
    console.log("stop");
  }
}

class Car {
  private engine: Engine;
  constructor() {
    this.engine = new Engine();
  }
  startCar(): void {
    this.engine.start();
  }

  stop(): void{
    this.engine.stop()
  }
}

const car1 = new Car()
car1.startCar()
car1.stop()
