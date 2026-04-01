/////////////// GENERICS FUNCTION ///////////////////
// function myFunction<T>(val1: T): T {
//   return val1;
// }

// const res1 = myFunction<number>(2.9873)
// const res2 = myFunction<string>("hello world")
// const res3 = myFunction<boolean>(true)

// console.log(res1.toFixed(2))
// console.log(res2.toUpperCase())
// console.log(res3.valueOf())

// function throwError(text: string): never {
//   throw new Error(text);
// }

// function myFunction<T>(val: T): boolean {
//   if (typeof val === "number") {
//     if (val >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   return throwError("value  is not a number");
// }

// const isAdult = myFunction<number>(21);
// const isAdult2 = myFunction<string>("javohir");
// console.log(isAdult);
// console.log(isAdult2);

// interface Name {
//     name  : string
// }

// interface Age {
//     age : number
// }

// interface IsMarried {
//     isMarried : boolean
// }

// function PrintPerson<T , U , K>(val1 : T , val2 : U , val3 : K):[T & U &K]{
//     return [{...val1 , ...val2 , ...val3}]
// }

// const person1 = PrintPerson<Name , Age , IsMarried>({name : "javohir"} , {age : 21} , {isMarried :  false})
// person1.push({name : "ulugbek" , age : 23 ,  isMarried : false})
// console.log(person1)

// interface IUser {
//   name: string;
//   age: number;
//   isMerried: boolean;
// }

// function marge<T>(val: T[]): T {
//   return <T>val[0];
// }

// const res1 = marge<number>([1.234, 2, 3, 4, 5]);
// console.log(res1.toFixed(2));

// const res2 = marge<string>(["bir", "ikki"]);
// console.log(res2.toUpperCase());

// const res3 = marge<IUser>([{name : "Javohir" , age : 21 , isMerried : false}])
// console.log(res3)


interface  Shape<T>{
    radius : T
}

function myFunction<T>(value : T):Shape<T>{
    return {radius : value}
}

const res1 = myFunction<number>(12)
console.log(res1)
const res2 = myFunction<string>("45deg")
console.log(res2) 


