const displayForm = document.querySelector('.displayForm');
const dialog = document.querySelector('dialog');
const hideForm = document.querySelector('.hideForm');

displayForm.addEventListener('click', () => {
    dialog.showModal();
})

hideForm.addEventListener('click', () => {
    dialog.close();
})


// const myLibrary = [];

// function addBookToLibrary () {

// }