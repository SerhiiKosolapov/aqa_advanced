const Book = require('./Book');

class EBook extends Book {
  constructor(title, year, fileFormat) {
    super(title, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() { return this._fileFormat; }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") throw new Error("Невірний формат файлу");
    this._fileFormat = value;
  }

  printInfo() {
    console.log(`eBook "${this.title}", ${this.year} р. [Формат: ${this.fileFormat}]`);
  }

  static fromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.title, bookInstance.year, fileFormat);
  }
}

module.exports = EBook;