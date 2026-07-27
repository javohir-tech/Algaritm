interface Person {
  firstName: string;
  lastName: string;
}

interface Memory {
  role: string;
  skills: string[];
}

interface ComWorker extends Person, Memory {
  age: number;
}

const personsList: ComWorker[] = [
  {
    firstName: "Javohir",
    lastName: "Suvonov",
    age: 22,
    role: "Software Engenier",
    skills: ["js", "ts"],
  },
];


console.log(personsList)