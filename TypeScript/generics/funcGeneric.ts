function logger<T>(val: T): T {
  return val;
}

console.log(logger<number>(12));

interface IUser {
  name: string;
  age: number;
}

function getFirstItem<T>(args: T[]): T | undefined {
  return args[0];
}

const firstNumber = getFirstItem<number>([10, 21]);
const firstString = getFirstItem<string>(["ali", "vali"]);
const firstUser = getFirstItem<IUser>([{ name: "ali", age: 22 }]);
console.log(firstString)

