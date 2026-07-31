"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookStatus;
(function (BookStatus) {
    BookStatus[BookStatus["Available"] = 0] = "Available";
    BookStatus[BookStatus["Borrowed"] = 1] = "Borrowed";
    BookStatus[BookStatus["Lost"] = 2] = "Lost";
})(BookStatus || (BookStatus = {}));
class LibraryItem {
    id;
    title;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
class Book extends LibraryItem {
    author;
    status;
    constructor(id, title, author) {
        super(id, title);
        this.author = author;
        this.status = BookStatus.Available;
    }
    borrow() {
        if (this.status !== BookStatus.Borrowed) {
            this.status = BookStatus.Borrowed;
            console.log("Book changed to borrow");
        }
        else {
            console.log("Bu kitob allaqachon borrowda ");
        }
    }
    returnItem() {
        if (this.status !== BookStatus.Available) {
            this.status = BookStatus.Available;
            console.log("kitob qaytarildi");
        }
        else {
            console.log("bu kitob allaqachon bizda mavjud");
        }
    }
    getInfo() {
        return `${this.author} ning ${this.title} kitobi`;
    }
}
class Library {
    items = [];
    static totalLibraries = 0;
    constructor() {
        Library.totalLibraries++;
    }
    addBook(book) {
        if (book.status === BookStatus.Available) {
            this.items.push(book);
            console.log(`${book.title} qo'shildi`);
        }
        else {
            console.log("yoqolgan yoki qarzga berilgan kitoblarni kutubxonalarga qo'sha olmaymiz \n");
            console.log("kitobni qaytip olip kutubxonaga qo'shishingiz mumkin \n");
        }
    }
    findBook(id) {
        const resultBook = this.items.find((b) => b.id === id);
        return resultBook;
    }
    get bookCount() {
        return this.items.length;
    }
}
const book1 = new Book(101, "ikki eshik oraasi", "Anonim1");
const book2 = new Book(102, "Alkimyogar", "Anonim2");
const Library1 = new Library();
Library1.addBook(book1);
Library1.addBook(book2);
console.log(Library1.findBook(100));
console.log(Library.totalLibraries);
console.log(Library1.bookCount);
//# sourceMappingURL=index.js.map