// Type Assertion( Type Castinng)
// Type Guards
// Type Asserts

// type assertion (type casting)
// angle braket syntax
let message: unknown = "Hello world";
const wordLength1: number = (<string>message).length;

const wordLength2: number = (message as string).length;

console.log(wordLength1);
console.log(wordLength2);

// type  guards

function logger(msg: string | number) {
  if (typeof msg === "string") {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg.toFixed(2));
  }
}

logger("salom dunyo");
logger(23.333);

class Dog {
  brak() {
    console.log("woof");
  }
}

class Cat {
  meow() {
    console.log("meow");
  }
}

const getSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    animal.brak();
  } else {
    animal.meow();
  }
};

getSound(new Dog());
getSound(new Cat());

type Car = { speed: number };
type Plane = { altitude: number };

function getInfo(vahicle: Car | Plane) {
    if("speed" in vahicle){
        console.log(vahicle.speed)
    }else{
        console.log(vahicle.altitude)
    }
}   


getInfo({speed : 1000})
getInfo({altitude : 10000})
