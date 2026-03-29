////////////////// interface ////////////////////
type seyHello = (name: string) => string;

interface Person {
  readonly firstName: string;
  lastName: string;
  age: number;
  cource ?: 1 | 2 | 3 | 4;

  greet: (message: string) => string;
}

// interface Person {
//   hoppy: string;
// }

interface Worker {
  postion: string;
  sayHello : seyHello
}

interface Componyworker extends Person, Worker {
  expirianse: number;
  coupuse : "east" | "west"
}

const persons: Componyworker[] = [
  {
    firstName: "Javohir",
    lastName: "Suvonov",
    age: 21,
    postion: "full Stack developer",
    // hoppy: "play  piano",
    // cource: 4,
    expirianse: 2,
    coupuse : "east",

    greet: function (message) {
      return message;
    },

    sayHello : function(name){
      return `Hello ${name}`
    }
  },
];

const person1 = persons[0];
console.log(person1?.greet("salom"));
console.log(person1?.sayHello("Javohir"))
// person1!.firstName = "suvonov"
console.log(person1?.firstName)
console.log(persons);
