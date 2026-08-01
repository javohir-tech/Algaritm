interface IUser {
  name: string;
}

interface Employee {
  role: "Admin" | "Dev";
}

interface Person {
  age: number;
}

function concatFunc<T, K, U>(val1: T, val2: K, val3: U): T & K & U {
    return {...val1 , ...val2 , ...val3}
}


console.log(concatFunc<IUser , Employee , Person>({name : "Jonh"} , {role : "Dev"} , {age : 22}))