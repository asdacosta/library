const displayForm = document.querySelector('.displayForm');
const dialog = document.querySelector('dialog');
const hideForm = document.querySelector('.hideForm');

displayForm.addEventListener('click', () => {
    dialog.showModal();
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
    const authorValue = document.querySelector('#author').value;
    const titleValue = document.querySelector('#title').value;
    const pagesValue = document.querySelector('#num').value;
    let readValue = '';

    if (firstOption.checked) {
        readValue = firstOption.value;
    } else if (secOption.checked) {
        readValue = secOption.value;
    }

    myLibrary[starter].author = authorValue;
    myLibrary[starter].title = titleValue;
    myLibrary[starter].pages = pagesValue;
    myLibrary[starter].read = readValue;
    starter += 1;
}

const cardSection = document.querySelector('dialog + section');

function displayLibrary() {
    for (n = 1; n < 20; n++) {
        if (starter === n) {
            const div = document.createElement('div');
            div.textContent = `The book ${myLibrary[n-1].title} by ${myLibrary[n-1].author} has ${myLibrary[n-1].pages} pages and ${myLibrary[n-1].read}.`;
            cardSection.appendChild(div);
        }
    }
}

hideForm.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    addBookToLibrary();
    displayLibrary();
})