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
const updateBookButton = document.querySelectorAll("#updateBookStatus")



function createBookOverview(books) {
  // loop through array & display books in div class

  let numberBooks = books.length;
  bookTable.innerHTML = "";

  for (let i = 0; i < numberBooks; i++) {

    let bookCardDiv = document.createElement("div");
    bookCardDiv.className = "bookcard";

    bookCardDiv.innerHTML = `
      <h3>${books[i].title}</h3>
      <div class="bookInfo">
      <p>Author: ${books[i].author}</p>
      <p>Pages: ${books[i].pages}</p>
      <p> Status: </p>
      <p> ${books[i].readStatus} </p>
      </div>
      <div class="updateSelect">
      <select name="cardStatusUpdate" id="cardStatusUpdate#${i}">
      <option value="not started"> not started</option>
      <option value="reading"> reading</option>
      <option value="finished"> finished</option>
  </select> <p>
</p>
  <button type="button" id ="updateBookStatus" onclick="updateBookStatus(${i})">Update</button>
</div>
  <button id="deleteBookButton" onclick="deleteBook(${i})">Delete</button>  
    `;
    bookTable.appendChild(bookCardDiv);
  }

}
createBookOverview(myLibrary);


function addBook() {
  // function to add book to array
  // Get the input elements
  const newTitle = document.getElementById("booktitle");
  const newAuthor = document.getElementById("author");
  const newPages = document.getElementById("pages");
  const newStatus = document.getElementById("readingStatus");


  if (newTitle.value != '' && newAuthor.value != '') {
    myLibrary.push({
      title: newTitle.value,
      author: newAuthor.value,
      pages: newPages.value,
      readStatus: newStatus.value
    });
  };
  createBookOverview(myLibrary);

  //clear input fields
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newStatus.value = "";
}

// function to delete books from library array
function deleteBook(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  createBookOverview(myLibrary);
}


function updateBookStatus(bookIndex) {
  // function update book status
  const updatedStatusSelect = document.getElementById("cardStatusUpdate#" + bookIndex);
  const updatedStatus = updatedStatusSelect.value


  myLibrary[bookIndex].readStatus = updatedStatus;

  createBookOverview(myLibrary);

}


// TODO:
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


addBookButton.addEventListener('click', addBook);
