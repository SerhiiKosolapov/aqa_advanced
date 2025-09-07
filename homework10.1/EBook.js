class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() { return this._fileFormat; }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") throw new Error("Невірний формат файлу");
    this._fileFormat = value;
  }

  printInfo() {
    console.log(`📘 "${this.title}" — ${this.author}, ${this.year} р. [Формат: ${this.fileFormat}]`);
  }

  static fromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}