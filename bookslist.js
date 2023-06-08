class BooksList {
  #books;

  constructor() {
    const storedBooks = localStorage.getItem('awesomeBooks');
    this.#books = storedBooks ? JSON.parse(storedBooks) : [];
    this.count = storedBooks.length;
  }

  get books() {
    return this.#books;
  }

  addBook(title, author) {
    const newBook = {
      title,
      author,
      id: this.count++,
    };
    this.#books.push(newBook);
    localStorage.setItem('awesomeBooks', JSON.stringify(this.#books));
    return newBook;
  }

  removeBook(id) {
    this.#books = this.#books.filter((book) => book.id != id);
    localStorage.setItem('awesomeBooks', JSON.stringify(this.#books));
    console.log(this.#books);
  }
}
export default BooksList;
