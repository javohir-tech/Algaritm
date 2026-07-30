class Animal {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  soud() {
    console.log(`${this.name} make a sound`);
  }

  showInfo(){
    console.log(`${this.name} va ${this.id}`)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    const id = Math.random() * 10;
    super(name, id);
  }

  override soud(): void {
    console.log("qayta ishga tushdi");
  }
}

const cat1 = new Cat("Kitty");

cat1.showInfo()
