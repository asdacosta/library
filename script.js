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

for (n = 0; n < 11; n++) {
    const book = new Book();
    myLibrary.push(book);
}

const firstOption = document.querySelector('#read');
const secOption = document.querySelector('#not-read');
const header = document.querySelector('h1');
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

    if (authorValue === '' || titleValue === '' || pagesValue === '' || readValue ==='') {
        output.textContent = 'Kindly input all details of the book.';
        output.style.backgroundColor = 'rgb(166, 217, 252)';
        cardSection.insertAdjacentElement('afterend', output);
        return;
    } else {
        output.innerHTML = '';
        output.style.backgroundColor = 'inherit';
    }

    if (starter === 10) {
        return;
    } else {
        myLibrary[starter].author = authorValue;
        myLibrary[starter].title = titleValue;
        myLibrary[starter].pages = pagesValue;
        myLibrary[starter].read = readValue;
        starter += 1;
    }
}

const cardSection = document.querySelector('dialog + section');
const output = document.createElement('p');
let lostCard = false;

function displayLibrary() {
    let index = starter-1;

    if (starter === 10) {
        if (lostCard) {
            --starter;
        }
        output.textContent = 'The Library is full!';
        output.style.backgroundColor = 'rgb(166, 217, 252)';
        cardSection.insertAdjacentElement('afterend', output);
        return;
    }
            const div = document.createElement('div');
            const subDiv = document.createElement('div');
            const hideCard = document.createElement('button');
            const toggleRead = document.createElement('button');
            toggleRead.textContent = 'Flip';
            hideCard.textContent = 'Clear';


            hideCard.addEventListener('click', () => {
                if (!lostCard) {
                    starter--; // Account for last missing card when starter hits 10 and an element(s) is removed after
                }
                lostCard = true;
                div.remove();
                starter--;
                output.innerHTML = '';
                output.style.backgroundColor = 'inherit';
            })

            // At index 1 is when text is entered for the index 0, so we want to always ref the prev text entered with (n-1)
            div.innerHTML = `The book ${myLibrary[starter-1].title} by ${myLibrary[starter-1].author} has ${myLibrary[starter-1].pages} pages and <span>${myLibrary[starter-1].read}.</span>`;


            subDiv.appendChild(toggleRead);
            subDiv.appendChild(hideCard);
            div.appendChild(subDiv);
            cardSection.appendChild(div);

                toggleRead.addEventListener('click', () => {
                    if (myLibrary[index].read === 'is read') {
                        myLibrary[index].read = 'is not read';
                        div.innerHTML = `The book ${myLibrary[index].title} by ${myLibrary[index].author} has ${myLibrary[index].pages} pages and <span>${myLibrary[index].read}.</span>`;
                    } else if (myLibrary[index].read === 'is not read') {
                        myLibrary[index].read = 'is read';
                        div.innerHTML = `The book ${myLibrary[index].title} by ${myLibrary[index].author} has ${myLibrary[index].pages} pages and <span>${myLibrary[index].read}.</span>`;
                    }
                    subDiv.appendChild(toggleRead);
                    subDiv.appendChild(hideCard);
                    div.appendChild(subDiv);
                })

        }

hideForm.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    addBookToLibrary();
    displayLibrary();
})