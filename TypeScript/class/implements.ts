interface IDrivible {
  model: string;
  startEngine(): void;
  drive(speed: number): void;
}

interface IFly {
  fly(high: number): void;
}

class Car implements IDrivible, IFly {
  model: string;
  constructor(name: string) {
    this.model = name;
  }

  startEngine(): void {
    console.log("start drive");
  }

  drive(speed: number): void {
    console.log(`${this.model} driving with ${speed}`);
  }

  fly(high: number): void {
    console.log(`${this.model} driving with ${high}`);
  }
}

const honda = new Car("Honda");
honda.startEngine();
honda.drive(120);
honda.fly(220);
