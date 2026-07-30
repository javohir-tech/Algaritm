class Car {
  name: string;
  owners: string[];

  constructor(name: string) {
    this.name = name;
    this.owners = [];
  }

  setOwners(owner: string): void;
  setOwners(owners: string[]): void;
  setOwners(ownerOrOwners: string | string[]) {
    if (typeof ownerOrOwners === "string") {
      this.owners.push(ownerOrOwners);
    } else if (typeof ownerOrOwners === "object") {
      this.owners = this.owners.concat(ownerOrOwners);
    }
  }
}

const car1 = new Car("Ferrari");
console.log(car1);
car1.setOwners("ali");

console.log(car1);
car1.setOwners(["vali", "g'ani"]);
console.log(car1)
