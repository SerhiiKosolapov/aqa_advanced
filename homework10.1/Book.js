class Book {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  get title() { return this._title; }
  get year() { return this._year; }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") throw new Error("Невірна назва");
    this._title = value;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) throw new Error("Невірний рік");
    this._year = value;
  }

  printInfo() {
    console.log(`Book "${this.title}", ${this.year} р.`);
  }

  static FindOldestBook(books) {
    return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
  }
}

module.exports = Book;