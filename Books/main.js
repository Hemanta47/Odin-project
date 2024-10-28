const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);

    displayCard(myLibrary);
}

function deleteBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayCard(myLibrary);
}

function displayCard(arr) {
    const container = document.getElementById('cards');
    container.innerHTML = '';

    arr.forEach((book, index) => {
        container.innerHTML += `
        <div class="card">
                <div class="heading">
                    <p class="book-title">${book.title}</p>
                    <div class="icon">
                        <a class="edit-book" data-index="${index}"><img src="icon/edit.svg" alt="Edit Book" width="60px"></a>
                        <a class="delete-book" data-index="${index}"><img src="icon/delete.svg" alt="Delete Book" width="60px"></a>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="details">
                    <p class="author">Author: <span>${book.author}</span></p>
                    <p class="page">Pages: <span>${book.pages}</span></p>
                    <p class="status">
                        Read Status: <input type="checkbox" ${book.read === "Read" ? "checked" : ""}>
                    </p>
                </div>
            </div>
        `
    });

    document.querySelectorAll('.delete-book').forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            deleteBookFromLibrary(index);
        });
    });

    document.querySelectorAll('.edit-book').forEach((button) => {
        button.addEventListener('click', (e) => {
            alert('Under construction')
        });
    });
}

const form = document.getElementById('bookForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('book-name').value;
    const author = document.getElementById('author-name').value;
    const pages = document.getElementById('page').value;
    const read = document.getElementById('read').checked ? "Read" : "Not Read";
    addBookToLibrary(title, author, pages, read);
    form.reset();

    dialog.classList.remove('dialogBox');
})



const dialog = document.querySelector('.form-box');

document.getElementById('close').addEventListener('click', (e) => {
    dialog.classList.remove('dialogBox');
});

document.getElementById('open').addEventListener('click', (e) => {
    dialog.classList.add('dialogBox');
});

