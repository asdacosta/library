const displayForm = document.querySelector('.displayForm');
const dialog = document.querySelector('dialog');
const hideForm = document.querySelector('.hideForm');

displayForm.addEventListener('click', () => {
    dialog.showModal();
})

hideForm.addEventListener('click', () => {
    dialog.close();
    addBookToLibrary();
})


const myLibrary = [];

function Book (author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
}

for (n = 0; n < 20; n++) {
    const book = new Book();
    myLibrary.push(book);
}

const firstOption = document.querySelector('#read');
const secOption = document.querySelector('#not-read');
let starter = 0;

function addBookToLibrary () {
    const authorValue = document.querySelector('#author');
    const titleValue = document.querySelector('#title');
    const pagesValue = document.querySelector('#num');

    if (firstOption.checked) {
        const readValue = firstOption.value;
    } else if (secOption.checked) {
        const readValue = secOption.value;
    }

    myLibrary[starter].author = authorValue;
    myLibrary[starter].title = titleValue;
    myLibrary[starter].pages = pagesValue;
    myLibrary[starter].read = readValue;
    starter += 1;
}