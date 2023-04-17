document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = function () {
        save();
    };
});

require('fs');

class Book{
    constructor(name, surname, title, format){
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.format = format;
    }
}

save = () => {


    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let title = document.querySelector('#title').value;
    let format = document.querySelector('#format').value;


    let daneJSON = fs.writeFileSync("BooksList.json", JSON.stringify(book));

    let dane = [];
    if(daneJSON == null){
        dane = [];
    }
    else{
        dane = JSON.parse(daneJSON);
    }

    let book = new Book(name, surname, title, format);
    dane.push(book)

    daneJSON = JSON.stringify(dane);
    fs.writeFileSync('books.json', JSON.stringify(book))

    alert('Book added!')
}


