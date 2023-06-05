const awesomeBooks = [];

const booksList = document.querySelector('#books');
const form = document.getElementById('form');

const loadBooks = () => {
  awesomeBooks.forEach((book) => {
    const li = document.createElement('li');
    const title = document.createElement('span');
    const author = document.createElement('span');
    const removeBtn = document.createElement('button');

    title.classList.add("title");
    author.classList.add("author");

    title.innerText = book.title;
    author.innerText = book.author;
    removeBtn.innerText = "Remove";

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(removeBtn);
    booksList.appendChild(li);
  });
};
  e.preventDefault();
  console.log(e.target);
});
