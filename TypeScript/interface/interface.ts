// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Memory {
//   role: string;
//   skills: string[];
// }

// interface ComWorker extends Person, Memory {
//   age: number;
// }

// const personsList: ComWorker[] = [
//   {
//     firstName: "Javohir",
//     lastName: "Suvonov",
//     age: 22,
//     role: "Software Engenier",
//     skills: ["js", "ts"],
//   },
// ];

// console.log(personsList)

type Logger = (message: string) => void;

interface Person {
  firstName: string;
  age: number;

  logger: Logger;
}

const person1: Person = {
  firstName: "Javohir",
  age: 22,
  logger: function (message) {
    console.log(`${this.firstName} ${message}`);
  },
};

console.log(person1.firstName)
person1.logger("salom")
