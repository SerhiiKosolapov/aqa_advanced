const book1 = new Book("Гаррі Поттер", "Дж. К. Ролінг", 1997);
const book2 = new Book("Місто", "Люко Дашвар", 2009);
const ebook1 = new EBook("JavaScript Essentials", "Serhii Dev", 2021, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const ebook2 = EBook.fromBook(book1, "EPUB");
ebook2.printInfo();

const allBooks = [book1, book2, ebook1, ebook2];
const oldest = Book.findOldestBook(allBooks);
console.log("📚 Найдавніша книга:");
oldest.printInfo();