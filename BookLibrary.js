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

Book.prototype.changeMyReadStatus = function() {
    this.read = !this.read;
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



addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Martyr!', 'Kaveh Akbar', 350, true);
addBookToLibrary('Good Material', 'Dolly Alderton', 336, false);
addBookToLibrary('You Dreamed of Empires', 'Álvaro Enrigue', 240, true);
addBookToLibrary('James', 'Percival Everett', 320, false);
addBookToLibrary('All Fours', 'Miranda July', 400, true);
addBookToLibrary('Everyone Who Is Gone Is Here', 'Jonathan Blitzer', 544, false);

function loopBooks() {
    myLibrary.forEach(book => {
        var bookEl = document.createElement("p");
        bookEl.textContent = book.info();

        var deleteBook = document.createElement("button");
        deleteBook.innerHTML = "delete"
        deleteBook.addEventListener("click", () => {
            myLibrary.pop(book);
            output.removeChild(bookEl)
        });

        var changeRead = document.createElement("button");
        changeRead.innerHTML = "change read"
        changeRead.addEventListener("click", () => {
            output.value = "";
            book.changeMyReadStatus();
            loopBooks();
        });

        bookEl.appendChild(deleteBook);
        bookEl.appendChild(changeRead);
        output.appendChild(bookEl);    
    })
}

// DIALOG:

const showDialogButton = document.getElementById("show-dialog");
const dialog = document.body.querySelector("dialog");
let output = document.body.querySelector("output");
const title = dialog.querySelector("#title");
const author = dialog.querySelector("#author");
const pages = dialog.querySelector("#pages");
const read = dialog.querySelector("#read");
const confirmBtn = dialog.querySelector("#confirmBtn");

showDialogButton.addEventListener('click', () => {
    dialog.showModal();
})

dialog.addEventListener('close', (e) => {
    read.value === "default" || title.value == "" || author.value == "" || pages.value == 0 
      ? output.value = "No return value."
      : output.value = ""; 
      loopBooks();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value == true ? true : false);
    dialog.close();
})