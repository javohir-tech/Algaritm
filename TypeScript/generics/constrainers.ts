function getName<T extends { length: number }>(obj: T): number {
  return obj.length;
}

const res1 = getName<string>("Hello world");
const res2 = getName<number[]>([1, 2, 3, 4, 5]);
// const res3 = getName(100) // error
console.log(res2);
console.log(res1);

function getpropotys<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface IUser  {
    name : string
    age : number
}

const user : IUser = {
  name: "Josh",
  age: 29,
};


const result1 = getpropotys(user , "name")
console.log(result1)

