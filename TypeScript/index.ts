// ======================= Type Aliases ==========================
import type { Person } from "./index.types";
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

const person1: Person = {
  firstName: "Javohir",
  lastName: "Suvonov",
  age: 21,
};

console.log(person1);

type greet = (message: string) => string;

const myFunction: greet = (message) => {
  return "hello " + message;
};

console.log(myFunction("salom"));
// Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(myFunction(21))

type Compony = {
  position: string;
  status: string;
};

type WorkCompony = Person & Compony;

const xodim: WorkCompony = {
  firstName: "Javohir",
  lastName: "Suvnov",
  age: 21,
  position: "Full Stack developer",
  status: "strong junior",
};

console.log(xodim);

type User = {
  fistName: string;
  lastName: string;
  age: 21;
  wife?: User;
};

const user1: User = {
  fistName: "Javohir",
  lastName: "Suvonov",
  age: 21,
  wife: {
    fistName: "kimdir",
    lastName: "nimadir",
    age: 21,
  },
};


console.log(user1)