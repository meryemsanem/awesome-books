const storedBooks = localStorage.getItem('awesomeBooks');
let awesomeBooks = storedBooks ? JSON.parse(storedBooks) : [];

const booksList = document.querySelector('#books');
const form = document.getElementById('form');

const createBookHTML = (book) => {
  const li = document.createElement('li');
  const bookDetails = document.createElement('span');
  const removeBtn = document.createElement('button');

  li.classList.add('book');
  bookDetails.classList.add('book-details');
  removeBtn.classList.add('remove-btn');
  removeBtn.classList.add('btn');

  bookDetails.innerText = `"${book.title}" by ${book.author}`;
  removeBtn.innerText = 'Remove';
  removeBtn.setAttribute('data-book-title', book.title);
  removeBtn.setAttribute('data-book-author', book.author);

  li.appendChild(bookDetails);
  li.appendChild(removeBtn);
  return li;
};

const loadBooks = () => {
  awesomeBooks.forEach((book) => {
    booksList.appendChild(createBookHTML(book));
  });
};

const loadSingleBook = (book) => {
  const html = createBookHTML(book);
  booksList.appendChild(html);
};

const addBook = (title, author) => {
  awesomeBooks.push({ title, author });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = e.target.elements;
  const title = inputs.title.value;
  const author = inputs.author.value;
  addBook(title, author);
  localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
  loadSingleBook({ title, author });
  e.target.reset();
});

booksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const title = e.target.dataset.bookTitle;
    const author = e.target.dataset.bookAuthor;
    awesomeBooks = awesomeBooks.filter((book) => !(book.title === title && book.author === author));
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
    booksList.innerHTML = ' ';
    loadBooks();
  }
});

window.addEventListener('load', loadBooks);
