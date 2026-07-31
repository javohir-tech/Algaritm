enum BookStatus {
  Available,
  Borrowed,
  Lost,
}

abstract class LibraryItem {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  abstract getInfo(): string;
}

interface Borrowable {
  borrow(): void;
  returnItem(): void;
}

class Book extends LibraryItem implements Borrowable {
  author: string;
  status: BookStatus;

  constructor(id: number, title: string, author: string) {
    super(id, title);
    this.author = author;
    this.status = BookStatus.Available;
  }

  borrow(): void {
    if (this.status !== BookStatus.Borrowed) {
      this.status = BookStatus.Borrowed;
      console.log("Book changed to borrow");
    } else {
      console.log("Bu kitob allaqachon borrowda ");
    }
  }

  returnItem(): void {
    if (this.status !== BookStatus.Available) {
      this.status = BookStatus.Available;
      console.log("kitob qaytarildi");
    } else {
      console.log("bu kitob allaqachon bizda mavjud");
    }
  }

  getInfo(): string {
    return `${this.author} ning ${this.title} kitobi`;
  }
}

class Library {
  private items: Book[] = [];
  static totalLibraries: number = 0;

  constructor() {
    Library.totalLibraries++;
  }

  addBook(book: Book): void {
    if (book.status === BookStatus.Available) {
      this.items.push(book);
      console.log(`${book.title} qo'shildi`);
    } else {
      console.log(
        "yoqolgan yoki qarzga berilgan kitoblarni kutubxonalarga qo'sha olmaymiz \n",
      );
      console.log("kitobni qaytip olip kutubxonaga qo'shishingiz mumkin \n");
    }
  }

  findBook(id: number): Book | undefined {
    const resultBook = this.items.find((b) => b.id === id);
    return resultBook;
  }

  get bookCount(): number {
    return this.items.length;
  }
}

const book1 = new Book(101, "ikki eshik oraasi", "Anonim1");
const book2 = new Book(102, "Alkimyogar", "Anonim2");

const Library1 = new Library();

Library1.addBook(book1);
Library1.addBook(book2);

console.log(Library1.findBook(100))

console.log(Library.totalLibraries);
console.log(Library1.bookCount);
