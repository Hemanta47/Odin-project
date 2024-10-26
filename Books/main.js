const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function(){
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
        }
    }

}
const book1 = new Book('The Legend','Han Li', 999, 'not read yet');
myLibrary.push(book1);



