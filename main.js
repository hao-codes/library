

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  // function to return book information
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus} yet.`;
  }
  // the constructor...
}

const redRising = new Book("Red Rising", "Pierce Brown", 382, "finished reading")
const goldenSon = new Book("Golden Son", "Pierce Brown", 464, "currently reading")
const morningStar = new Book("Morning Star", 	"Pierce brown", 525, "not started")


const myLibrary = [redRising, goldenSon, morningStar];


console.log(myLibrary);

function addBookToLibrary() {
  // do stuff here

};

// add some default books to array to display

