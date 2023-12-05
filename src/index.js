import './style.css';

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const selectElements = (function () {
  const displayFormButton = document.querySelector('.displayForm');
  const dialog = document.querySelector('dialog');
  const hideFormButton = document.querySelector('.hideForm');
  const cardSection = document.querySelector('dialog + section');
  const output = document.createElement('p');

  // Inputs
  const authorInput = document.querySelector('#author');
  const titleInput = document.querySelector('#title');
  const pagesInput = document.querySelector('#num');
  const readOption = document.querySelector('#read');
  const notReadOption = document.querySelector('#not-read');

  return {
    displayFormButton,
    dialog,
    hideFormButton,
    readOption,
    notReadOption,
    cardSection,
    output,
    authorInput,
    titleInput,
    pagesInput,
  };
})();

const defineIndexesAndToggles = (function () {
  let starter = 0;
  let cards = 0;
  let emptyInput = false;
  let lostCard = false;

  return { starter, emptyInput, cards, lostCard };
})();

const addEmptyBooksToLibrary = (function () {
  const myLibrary = [];
  class Book {
    constructor(author, title, pages, read) {
      this.author = author;
      this.title = title;
      this.pages = pages;
      this.read = read;
    }
  }

  for (let n = 0; n < 11; n++) {
    const book = new Book();
    myLibrary.push(book);
  }

  return { myLibrary };
})();

const displayForm = (function () {
  selectElements.displayFormButton.addEventListener('click', () => {
    selectElements.dialog.showModal();
  });
})();

function addBookToLibrary() {
  const authorValue = selectElements.authorInput.value;
  const titleValue = selectElements.titleInput.value;
  const pagesValue = selectElements.pagesInput.value;
  let readValue = '';

  if (selectElements.readOption.checked) {
    readValue = selectElements.readOption.value;
  } else if (selectElements.notReadOption.checked) {
    readValue = selectElements.notReadOption.value;
  }

  if (authorValue === '' || titleValue === '' || pagesValue === '' || readValue === '') {
    if (!defineIndexesAndToggles.emptyInput) {
      defineIndexesAndToggles.emptyInput = true;
    } else {
      --defineIndexesAndToggles.starter;
    }
    // selectElements.output.textContent = 'Kindly input all details of the book.';
    // selectElements.output.style.backgroundColor = 'rgb(194, 146, 79)';
    // selectElements.cardSection.insertAdjacentElement('afterend', selectElements.output);

    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].author =
      authorValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].title = titleValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].pages = pagesValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].read = readValue;
    defineIndexesAndToggles.starter += 1;

    if (defineIndexesAndToggles.cards === 9) {
      selectElements.output.textContent = 'The Library is full!';
    }
    return;
  } else {
    selectElements.output.innerHTML = '';
    selectElements.output.style.backgroundColor = 'inherit';
  }

  if (defineIndexesAndToggles.cards === 9) {
    selectElements.output.textContent = 'The Library is full!';
    selectElements.output.style.backgroundColor = 'rgb(194, 146, 79)';
    return;
  } else {
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].author =
      authorValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].title = titleValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].pages = pagesValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].read = readValue;
    defineIndexesAndToggles.starter += 1;
  }
}

function displayLibrary() {
  let index = defineIndexesAndToggles.starter - 1;

  if (
    addEmptyBooksToLibrary.myLibrary[index].author === '' ||
    addEmptyBooksToLibrary.myLibrary[index].title === '' ||
    addEmptyBooksToLibrary.myLibrary[index].pages === '' ||
    addEmptyBooksToLibrary.myLibrary[index].read === ''
  ) {
    return;
  }

  if (defineIndexesAndToggles.cards === 9) {
    if (defineIndexesAndToggles.lostCard) {
      --defineIndexesAndToggles.starter;
    }
    selectElements.output.textContent = 'The Library is full!';
    selectElements.output.style.backgroundColor = 'rgb(194, 146, 79)';
    selectElements.cardSection.insertAdjacentElement('afterend', selectElements.output);
    return;
  } else {
    defineIndexesAndToggles.cards += 1;
  }
  const div = document.createElement('div');
  const subDiv = document.createElement('div');
  const hideCard = document.createElement('button');
  const toggleRead = document.createElement('button');
  toggleRead.textContent = 'Flip';
  hideCard.textContent = 'Clear';

  hideCard.addEventListener('click', () => {
    if (!defineIndexesAndToggles.lostCard) {
      defineIndexesAndToggles.starter--; // Account for last missing card when starter hits 10 and an element(s) is removed after
    }
    defineIndexesAndToggles.lostCard = true;
    div.remove();
    if (defineIndexesAndToggles.starter > 0) {
      defineIndexesAndToggles.starter--;
    }
    --defineIndexesAndToggles.cards;
    selectElements.output.innerHTML = '';
    selectElements.output.style.backgroundColor = 'inherit';
  });

  // At index 1 is when text is entered for the index 0, so we want to always ref the prev text entered with (n-1)
  div.innerHTML = `<p>The book ${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].title
  } by ${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].author
  } has ${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].pages
  } pages and <span>${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].read
  }.</span></p>`;

  subDiv.appendChild(toggleRead);
  subDiv.appendChild(hideCard);
  div.appendChild(subDiv);
  selectElements.cardSection.appendChild(div);

  toggleRead.addEventListener('click', () => {
    if (addEmptyBooksToLibrary.myLibrary[index].read === 'is read') {
      addEmptyBooksToLibrary.myLibrary[index].read = 'is not read';
      div.innerHTML = `<p>The book ${addEmptyBooksToLibrary.myLibrary[index].title} by ${addEmptyBooksToLibrary.myLibrary[index].author} has ${addEmptyBooksToLibrary.myLibrary[index].pages} pages and <span>${addEmptyBooksToLibrary.myLibrary[index].read}.</span></p>`;
    } else if (addEmptyBooksToLibrary.myLibrary[index].read === 'is not read') {
      addEmptyBooksToLibrary.myLibrary[index].read = 'is read';
      div.innerHTML = `<p>The book ${addEmptyBooksToLibrary.myLibrary[index].title} by ${addEmptyBooksToLibrary.myLibrary[index].author} has ${addEmptyBooksToLibrary.myLibrary[index].pages} pages and <span>${addEmptyBooksToLibrary.myLibrary[index].read}.</span></p>`;
    }
    subDiv.appendChild(toggleRead);
    subDiv.appendChild(hideCard);
    div.appendChild(subDiv);
  });
}

function throwError(theEvent) {
  if (selectElements.authorInput.validity.valueMissing) {
    selectElements.authorInput.setCustomValidity("Author field can't be empty");
    selectElements.authorInput.addEventListener('input', () => {
      selectElements.authorInput.setCustomValidity('');
    });
  }

  if (selectElements.titleInput.validity.valueMissing) {
    selectElements.titleInput.setCustomValidity("Title field can't be empty.");
    selectElements.titleInput.addEventListener('input', () => {
      selectElements.titleInput.setCustomValidity('');
    });
  }

  if (selectElements.pagesInput.validity.valueMissing) {
    selectElements.pagesInput.setCustomValidity("Page number can't be empty");
    selectElements.pagesInput.addEventListener('input', () => {
      selectElements.pagesInput.setCustomValidity('');
    });
  }

  if (!selectElements.readOption.checked && !selectElements.notReadOption.checked) {
    selectElements.readOption.setCustomValidity('You need to check one');
  }

  if (
    selectElements.authorInput.validity.valid &&
    selectElements.titleInput.validity.valid &&
    selectElements.pagesInput.validity.valid &&
    (selectElements.readOption.validity.valid ||
      selectElements.notReadOption.validity.valid)
  ) {
    theEvent.preventDefault();
    selectElements.dialog.close();
  }
}

const closeForm = (function () {
  selectElements.hideFormButton.addEventListener('click', (event) => {
    throwError(event);
    addBookToLibrary();
    displayLibrary();
  });
})();

const exitDialog = (function () {
  const cancelDialog = document.querySelector('.cancelForm');

  cancelDialog.addEventListener('click', (event) => {
    event.preventDefault();
    selectElements.dialog.close();
    selectElements.output.innerHTML = '';
    selectElements.output.style.backgroundColor = 'inherit';
  });
})();
