///// union types //////////////////
let id: string | number = 12;
id = "swgd-123";
console.log(id);

function myFunction(id: number | string):void {
  console.log(`My id ${id}`);
}

myFunction(12);
myFunction("salom");

function getterFunc(message: string | number): string | number {
  if (typeof message === "string") {
    return `hello  ${message}`;
  } else if (typeof message === "number") {
    return message;
  }
``
  return "Undefiend type" + message;
}

console.log(getterFunc("javohir"))
console.log(getterFunc(12))

//Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// console.log(getterFunc(true))
