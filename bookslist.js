class BooksList {
  #books;

  constructor() {
    const storedBooks = localStorage.getItem('awesomeBooks');
    this.#books = storedBooks ? JSON.parse(storedBooks) : [];
  }

  get books() {
    return this.#books;
  }

  addBook(title, author) {
    const newBook = {
      title,
      author,
    };
    this.#books.push(newBook);
    localStorage.setItem('awesomeBooks', JSON.stringify(this.#books));
  }

  removeBook(title, author) {
    this.#books = this.#books.filter(
      (book) => !(book.title === title && book.author === author),
    );
    localStorage.setItem('awesomeBooks', JSON.stringify(this.#books));
  }
}
export default BooksList;
