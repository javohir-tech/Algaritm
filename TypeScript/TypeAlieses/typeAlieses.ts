// type ID = string | number

// let userID : ID
// userID = 12
// userID = "qwer123"
// console.log(userID)

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
  isMerried: boolean;
};

// type Experiens = {
//   expriensYear: number;
//   componies: string[];
//   status: string;
// };

// type ComponyManagers = Experiens & Person;

const person1: Person = {
  firstName: "Javohir",
  lastName: "Suvonov",
  age: 22,
  skills: ["JavaScript", "Python", "TypeScript"],
  isMerried: false, // :(
};

// const companyManager1: ComponyManagers = {
//   firstName: "Javohir",
//   lastName: "Suvonov",
//   age: 22,
//   skills: ["JavaScript", "Python", "TypeScript"],
//   isMerried: false, // :(
//   expriensYear : 2 ,
//   componies : ["limsa" , "nkmk"] ,
//   status : "middle"
// };

// console.log(person1);
// console.log(companyManager1)

// type Logger = (message : string) => string

// const log:Logger = (message) =>{
//     return message.toUpperCase()
// }

// console.log(log("salom dunyo"))

type PersonList = Person[];

const personlist1: PersonList = [
  {
    firstName: "Javohir",
    lastName: "Suvonov",
    age: 22,
    skills: ["JavaScript", "Python", "TypeScript"],
    isMerried: false, // :(
  },
  {
    firstName: "Ulug'bek",
    lastName: "Suvonov",
    age: 24,
    skills: [],
    isMerried: false, // :(
  },
];

console.log(personlist1)

type TestType = number | string | "success"

type ArrayType = TestType[]

const arraytype1 : ArrayType = [1 , "salom" , "success" , ]
console.log(arraytype1)