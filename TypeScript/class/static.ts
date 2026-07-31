class Person {
  firstName: string;
  static lastName: string = "Suvonov";

  constructor(name: string) {
    this.firstName = name;
  }

  // bu yerda this obyektga yo'nalgan bo'ladi  
  getName(){
    console.log(`${this.firstName}`)
  }

  // static methodlarda this aynana shu class ga yo'nalgan bo'ladi
  static getLastName() {
    console.log(`${this.lastName} `);
  }
}

Person.getLastName();
