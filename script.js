const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isRead = this.read ? 'read' : 'not read yet'
}

Book.prototype.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
}


function addBookToLibrary(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    myLibrary.push(
        new Book(this.title, this.author, this.pages, this.read)
    )
}

Object.setPrototypeOf(addBookToLibrary.prototype, Book.prototype);

function loopBooks() {
    myLibrary.forEach(book => console.dir(book))
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Martyr!', 'Kaveh Akbar', 350, true);
addBookToLibrary('Good Material', 'Dolly Alderton', 336, false);
addBookToLibrary('You Dreamed of Empires', 'Álvaro Enrigue', 240, true);
addBookToLibrary('James', 'Percival Everett', 320, false);
addBookToLibrary('All Fours', 'Miranda July', 400, true);
addBookToLibrary('Everyone Who Is Gone Is Here', 'Jonathan Blitzer', 544, false);

