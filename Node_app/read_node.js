// wymaga do działania modułu prompt-sync ( npm install prompt-sync )
// lubię wpisywać zmienne przy wywoływaniu funkcji :)

const fs = require("fs"); 

console.log('List of Books in the Library');

let fetchBooks = () => {
    try {
      let booksString = fs.readFileSync("BookLibrary.json");
      return JSON.parse(booksString);
    } catch (e) {
      return [];
    }
  };

let saveBook = (book) => {
    fs.writeFileSync("BookLibrary.json", JSON.stringify(book)); 
}

let addBook = (name, surname, title, format) => {
    let booksSoFar = fetchBooks();
    let bookToSave = {
        name,
        surname,
        title,
        format
    };
    booksSoFar.push(bookToSave);
    saveBook(booksSoFar);
    return bookToSave;
};  

let book = addBook(name, surname, title, format);
console.log(`Book ${book.name} ${book.surname} ${book.title} ${book.format} added to the Library`);

