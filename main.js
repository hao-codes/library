function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  // function to return book information
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus} yet.`;
  }
  // the constructor...
}
// add some default books to array to display
const redRising = new Book("Red Rising", "Pierce Brown", 382, "finished")
const goldenSon = new Book("Golden Son", "Pierce Brown", 464, "reading")
const morningStar = new Book("Morning Star", "Pierce brown", 525, "not started")

const myLibrary = [redRising, goldenSon, morningStar];

// create const for buttons, etc.
const bookTable = document.querySelector(".book-table");
const addBookButton = document.querySelector("#add-book");
const deleteBookButton = document.querySelectorAll("#deleteBookButton")
console.log(deleteBookButton);

function updateBookStatus() {
  // TODO function for button to update book status
}

function createBookOverview(books) {
  // loop through array
  // display books in div class
  // 4 books per row, if more - create more rows

  let numberBooks = books.length;
  let nRows = Math.ceil(numberBooks / 4);
  bookTable.innerHTML = "";

  for (let i = 0; i < numberBooks; i++) {
    console.log(books[i]);
    console.log(typeof(books[i]));
    let bookCardDiv = document.createElement("div");
    bookCardDiv.className = "bookcard";
    //bookCardDiv.classList
    bookCardDiv.innerHTML = `
      <h3>${books[i].title}</h3>
      <p>Author: ${books[i].author}</p>
      <p>Pages: ${books[i].pages}</p>
      <p> Status: ${books[i].readStatus}</p>
      <select name="cardStatusUpdate" id="cardStatusUpdate#${i}">
      <option value="not"> not started</option>
      <option value="currently"> reading</option>
      <option value="finished"> finished</option>
  </select> 
      <button onclick="updateBookStatus()">Update Status</button>
      <p>
  </p>
  <button id="deleteBookButton" onclick="deleteBook(${i})">Delete Book</button>  
    `;
    bookTable.appendChild(bookCardDiv);
  }

}
createBookOverview(myLibrary);

// create function to add book to array

function addBook() {
  // Get the input elements
  const newTitle = document.getElementById("booktitle");
  const newAuthor = document.getElementById("author");
  const newPages = document.getElementById("pages");
  const newStatus = document.getElementById("readingStatus");


  if (newTitle.value != '' && newAuthor.value != '') {
    // Add the values to the array
    myLibrary.push({
      title: newTitle.value,
      author: newAuthor.value,
      pages: newPages.value,
      readStatus: newStatus.value
    });
  };
  console.log(myLibrary);
  createBookOverview(myLibrary);

  // clear input fields
  // newTitle.value = "";
  // newAuthor.value = "";
  // newPages.value = "";
  // newStatus.value = "";
}


function deleteBook(bookIndex) {
  console.log("----");
  console.log(bookIndex);
  myLibrary.splice(bookIndex, 1);
  createBookOverview(myLibrary);
}


// TODO:
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

console.log(myLibrary);
addBookButton.addEventListener('click', addBook);
