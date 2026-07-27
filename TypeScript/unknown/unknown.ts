// function logger(value: unknown) {
//   // unknown anyga qaraganda ancha havfsiz sabab uni ishlatishdan oldin type narowing qilip olish kerak
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value.toFixed(2);
//   }

//   return "unknown type";
// }

// console.log(logger("salom"));
// console.log(logger(23.345));
// console.log(logger(true));

// let result: unknown = "salom";
// let res: number = result as number;

// console.log(res)

// let person1: unknown = {
//   firstName: "Javohir",
//   age: 22,
// };

// interface Person {
//   name: string; // firstName
//   age: number;
// }

// if (typeof person1 === "object") {
//     const obj = person1 as Person
//     console.log(obj.name)
// }
