

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
const redRising = new Book("Red Rising", "Pierce Brown", 382, "finished reading")
const goldenSon = new Book("Golden Son", "Pierce Brown", 464, "currently reading")
const morningStar = new Book("Morning Star", "Pierce brown", 525, "not started")


const myLibrary = [redRising, goldenSon, morningStar];


console.log(myLibrary);

function addBookToLibrary() {
  // do stuff here

};
//const bookTable = document.getElementsByClassName("book-table");
const bookTable = document.querySelector(".book-table");
function createBookOverview(books) {
  // loop through array
  // display books in div class
  // 4 books per row, if more - create more rows


  let numberBooks = books.length;
  let nRows = Math.ceil(numberBooks / 4);

 
  bookTable.innerHTML = "";

  for (let i = 0; i < numberBooks; i++) {
    let bookCard = document.createElement("div");
    bookCard.className = "bookcard";
    bookCard.innerHTML = "Title: " + books[i].title + "Author: "+books[i].author + " Pages: "+ books[i].pages + " Reading Status: " + books[i].readStatus
    bookTable.appendChild(bookCard);
  }
  // loop through book array 




}
createBookOverview(myLibrary);


