class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() { return this._title; }
  get author() { return this._author; }
  get year() { return this._year; }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") throw new Error("Невірна назва");
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") throw new Error("Невірний автор");
    this._author = value;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) throw new Error("Невірний рік");
    this._year = value;
  }

  printInfo() {
    console.log(`📖 "${this.title}" — ${this.author}, ${this.year} р.`);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
  }
}