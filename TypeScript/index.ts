////// unknown /////////////////
function myFunction(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unkown type";
}

console.log(myFunction("salom"));
console.log(myFunction(23.343515));
console.log(myFunction(true));

const person: unknown = {
  name: "Javohir",
  age: 21,
};

interface Person {
  name : string, 
  age : number
}

function Greet(obj: unknown) {
  const newObj = obj as Person
  console.log(newObj.name)
  console.log(newObj.age)
}

Greet(person)
