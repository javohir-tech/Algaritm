class Animal {
  static title: string = "josh";
  

  static makeSound(){
    console.log("wow")
  }

}

class Cat extends Animal {

}

console.log(Animal.title)
Animal.makeSound()

console.log(Cat.title)
Cat.makeSound()