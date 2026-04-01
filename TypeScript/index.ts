function Myfunction<T>(value: T): T {
  return value;
}

console.log(Myfunction<number>(5));

// const arr: (number | string)[] = [1, 2, 3, 4, 5];
const arr: Array<number> = [1, 2, 3, 4, 5];

interface IUser {
  name: string;
  age: number;
}

// const users: (IUser & {isMarried :  boolean})[] = [
//   {
//     name: "Javohir",
//     age: 21,
//     isMarried : false
//   },
// ];

const users: Array<IUser & { isMarried: false }> = [
  {
    name: "Javohir",
    age: 21,
    isMarried: false,
  },
];

console.log(users);

enum Person {
  ADMIN,
  MANAGER,
  USER,
}

type USER = Record<string, number>;

const companyusers: USER[] = [
  {
    position: Person.ADMIN,
    age: 21,
  },
];

console.log(companyusers)
