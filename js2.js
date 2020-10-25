//ex1. 4times same number
// same number because set timeout loop each element once
//ex2.  return error hoisted is not a function
//since first assigned hoisted to variable and
// (var is function scope)
//ex3.
const books = [
  {
        bookName: "The Nature of Software Development",
        author: "Ron Jeffries",
        coverURL:
              "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
        bookName: "Clean Code",
        author: "Robert Cecil Martin",
        coverURL:
]
function injectBooksToDOM(){
let ulElement = createBookList(books);
document.querySelector("#bookList").appendChild(ulElement);
for (const book of books){
    //create list of books
    const listBooks = document.querySelector("ul");
    const listBooksItems = document.createElement("li");
    const bookParagraph = document.createElement("p");
    listBooks.appendChild(listBooksItems);
    listBooksItems.appendChild(bookParagraph);
    bookParagraph.textContent = `${.books.bookName} - ${books.author}`;
    //create books image
    const bookImage = document.createElement("img");
    bookImage.src = `${BookImageName.CoverURL}`
    listBooksItems.appendChild(bookImage);
}
    if (BookImageName.CoverURL ==== true ) {
      listBooksItems.appendChild(bookImage);
        ;
      } else {
        console.log(false);
      }
      //ex4.  yes since  asynchronous JavaScript such as callback,
      //it can perform long requests without blocking the main thread
     // (here console.log('one');  ,  console.log('six'); , console.log('four') , console.log('two') )
     // so console.log('five') , console.log('three') happen after one second
     // also depend on browser speed
