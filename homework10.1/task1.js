const Book = require('./Book');
const EBook = require('./EBook');

const _book_printfn01 = () => {
  const _book = new Book('Book1', 2001);
  _book.printInfo();
};

const oldest_printfn01 = () => {
  const allbooks = [
    new Book('Books', 1111),
    new Book('abc', 2000),
    new EBook('bOOK', 1999, 'PDF')
  ];
  const oldest = Book.FindOldestBook(allbooks);
  oldest.printInfo();
};

const ebook_from_book_fn = () => {
  const original = new Book('Legacy', 1985);
  const ebook = EBook.fromBook(original, 'EPUB');
  ebook.printInfo();
};

console.log('Manipulate some vars...');
_book_printfn01();
oldest_printfn01();
ebook_from_book_fn();