class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  wow() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  sound() {
    console.log(`${this.name} 1`);
  }
}

class SmallDog extends Dog {
  override sound() {
    super.sound()
    console.log(this.name + "2");
  }
}

// const dog = new Dog("Reks")
// dog.sound()

const smallDog = new SmallDog("reks");
smallDog.sound();
