// Access medifier

// publik - hammaga korishga beradi
// private - faqat yaratilgan klassi ichida ishlaydi
// public - faqat meros olingan classda ishlaydi

class Music {
  protected sound: string;
  protected id: number;

  constructor(sound: string, id: number) {
    this.sound = sound;
    this.id = id;
  }

  showMusicName() {
    console.log(`${this.sound} mana `);
  }
}

class Author {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  showAuthor() {
    console.log(`${this.name} author`);
  }
}

class Video extends Music {
  constructor(sound: string, id: number) {
    super(sound, id);
  }

  showVideoMusic() {
    console.log()
  }
}

const author1 = new Author("ozodbek");
author1.showAuthor();

const music1 = new Music("sanamlar", 12);
music1.showMusicName();
