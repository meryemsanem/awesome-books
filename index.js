const storedBooks = localStorage.getItem("awesomeBooks");
let awesomeBooks = storedBooks ? JSON.parse(storedBooks) : [];

const booksList = document.querySelector("#books");
const form = document.getElementById("form");

const loadBooks = () => {
  awesomeBooks.forEach((book) => {
    booksList.appendChild(createBookHTML(book));
  });
};

const loadSingleBook = (book) => {
  const html = createBookHTML(book);
  booksList.appendChild(html);
};

const createBookHTML = (book) => {
  const li = document.createElement("li");
  const title = document.createElement("span");
  const author = document.createElement("span");
  const removeBtn = document.createElement("button");

  title.classList.add("title");
  author.classList.add("author");

  title.innerText = book.title;
  author.innerText = book.author;
  removeBtn.innerText = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.setAttribute("data-book-title", book.title);
  removeBtn.setAttribute("data-book-author", book.author);

  li.appendChild(title);
  li.appendChild(author);
  li.appendChild(removeBtn);
  return li;
};

const addBook = (title, author) => {
  awesomeBooks.push({ title, author });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = e.target.elements;
  const title = inputs["title"].value;
  const author = inputs["author"].value;
  addBook(title, author);
  localStorage.setItem("awesomeBooks", JSON.stringify(awesomeBooks));
  loadSingleBook({ title, author });
  e.target.reset();
});

booksList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const title = e.target.dataset.bookTitle;
    const author = e.target.dataset.bookAuthor;
    awesomeBooks = awesomeBooks.filter((book) => {
      return !(book.title === title && book.author === author);
    });
    localStorage.setItem("awesomeBooks", JSON.stringify(awesomeBooks));
    booksList.innerHTML = " ";
    loadBooks();
  }
});

window.addEventListener("load", loadBooks);
