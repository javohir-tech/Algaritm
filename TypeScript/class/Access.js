"use strict";
// Access medifier
Object.defineProperty(exports, "__esModule", { value: true });
// publik - hammaga korishga beradi
// private - faqat yaratilgan klassi ichida ishlaydi
// public - faqat meros olingan classda ishlaydi
class Music {
    sound;
    constructor(sound) {
        this.sound = sound;
    }
    showMusicName() {
        console.log(`${this.sound} mana `);
    }
}
class Author {
    name;
    constructor(name) {
        this.name = name;
    }
    showAuthor() {
        console.log(`${this.name} author`);
    }
}
class Video extends Music {
    constructor(sound) {
        super(sound);
    }
}
const author1 = new Author("ozodbek");
author1.showAuthor();
const music1 = new Music("sanamlar");
music1.showMusicName();
//# sourceMappingURL=Access.js.map