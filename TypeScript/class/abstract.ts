interface IAnimal {
  name: string;
  makeSound(): void;
}

abstract class Animal {
  constructor(public name: string) {}


  //  inetrfacelardan ham shoplon  sifatida foydalansa bo'ladi 
  // lekin abbstract class lar bilan shaplon yaratganda shunday qo'shimcha methodlaar 
  //  yozsa bo'ladi  
  move() {
    console.log(`${this.name}`);
  }
  
  abstract makeSound(): void;
}

class Cat extends Animal {
  makeSound(): void {
    console.log("moew");
  }
}

const cat1 = new Cat("Kitty");
cat1.makeSound();
cat1.move();
