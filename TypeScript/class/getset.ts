class Employee {
  private _salary!: number;

  set salary(sum: number) {
    this._salary = sum * 100;
  }

  get salary(): number {
    return this._salary;
  }
}

const employee1 = new Employee();

employee1.salary = 10;
let salary = employee1.salary;
console.log(salary);
