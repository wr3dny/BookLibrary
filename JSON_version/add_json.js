document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = function () {
        addBook();
    };
});

const fs = require("fs"); 

class Book{
    constructor(name, surname, title, format){
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.format = format;
    }
}

// fetchBooks = () => {
//     try{
//         let notesJSON = fs.readFileSync('books.json');
//         return JSON.parse(notesJSON);
//     } catch (e) {
//         return [];
//     }
// }

// saveBook = (book) => {
//     fs.writeFileSync('books.json', JSON.stringify(book));
// }

// addBook = (name, surname, title, format) => {
//     let books = fetchBooks();
//     let book = new Book(name, surname, title, format);
//     books.push(book);
//     saveBook(books);    
// }

// let name = document.querySelector('#name').value;
// let surname = document.querySelector('#surname').value;
// let title = document.querySelector('#title').value;
// let format = document.querySelector('#format').value;

// addBook(name, surname, title, format);
// alert('Book added!')






addBook = () => {
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let title = document.querySelector('#title').value;
    let format = document.querySelector('#format').value;

    fetchBooks = () => {
        try{
            let notesJSON = fs.readFileSync('books.json');
            return JSON.parse(notesJSON);
        } catch (e) {
            return dane = [];
        }
    };

    let saveBook = (book) => {
        fs.writeFileSync("BooksList.json", JSON.stringify(book)); 
    }

    addBook = (name, surname, title, format) => {
        let booksSoFar = fetchNotes();
        let bookToSave = {
          name,
          surname,
          title,
          format
        };
          booksSoFar.push(bookToSave);
          saveBook(scoresSoFar);
          return bookToSave;
    }; 

    addBook(name, surname, title, format);




    // let daneJSON = localStorage.getItem('BK');
    // let dane = [];
    // if(daneJSON == null){
    //     dane = [];
    // }
    // else{
    //     dane = JSON.parse(daneJSON);
    // }

    // let book = new Book(name, surname, title, format);
    // dane.push(book)

    // daneJSON = JSON.stringify(dane);
    // localStorage.setItem('BK', daneJSON);

    // saveBook = (book) => {
    // fs.writeFileSync('books.json', JSON.stringify(book));
    // }

    alert('Book added!')
}

