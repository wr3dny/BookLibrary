document.addEventListener("DOMContentLoaded", function () {
    show();
});

edit = (index) => {

    let daneJSON = localStorage.getItem('BK');
    let dane = JSON.parse(daneJSON);

    let html2;

    html2 = "<ul>"
    html2 += `<input type="text" id="name" placeholder="Name" value="${dane[index].name}">`;
    html2 += `<input type="text" id="surname" placeholder="Surname" value="${dane[index].surname}">`;
    html2 += `<input type="text" id="title" placeholder="Title" value="${dane[index].title}">`;
    html2 += `<input type="text" id="format" placeholder="Format" value="${dane[index].format}">`;
    html2 += `<button onclick="save(${index})">Save changes</button>`;
    html2 += `<button onclick="cancel(${index})">Cancel changes</button>`;
    html2 += "</ul>"

    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let title = document.querySelector('#title').value;
    let format = document.querySelector('#format').value;



    let book = new Book(name, surname, title, format);
    dane.push(book)



    daneJSON = JSON.stringify(dane);
    localStorage.setItem('BK', daneJSON);

    



    document.querySelector("div#toEdit").innerHTML = html2;

    save = () => {
        let name = document.querySelector('#name').value;
        let surname = document.querySelector('#surname').value;
        let title = document.querySelector('#title').value;
        let format = document.querySelector('#format').value;
    
    
        let daneJSON = localStorage.getItem('BK');
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
        localStorage.setItem('BK', daneJSON);
    
        alert('Book eddited!')
    }



    // let name = document.querySelector('#name').value;
    // let surname = document.querySelector('#surname').value;
    // let title = document.querySelector('#title').value;
    // let format = document.querySelector('#format').value;

    // dane[index].name = name;
    // dane[index].surname = surname;
    // dane[index].title = title;
    // dane[index].format = format;

    // localStorage.setItem('BK', JSON.stringify(dane));

}
    

show = () => {

    let daneJSON = localStorage.getItem('BK');

    let html;

    if(daneJSON == null || daneJSON == '[]'){
        html ="<h3>No data</h3>";
    }

    else{
        let dane = JSON.parse(daneJSON);

        html = "<table>";
        html += "<tr>";
        html += "<th>Name</th>";
        html += "<th>Surname</th>";
        html += "<th>Title</th>";
        html += "<th>Format</th>";
        html += "<th></th>";

        html += "</tr>";

        html += "<tr>";
        for(let index in dane){
            html += `<td>${dane[index].name}</td>`;
            html += `<td>${dane[index].surname}</td>`;
            html += `<td>${dane[index].title}</td>`;
            html += `<td>${dane[index].format}</td>`;
            html += `<td><b onclick='edit(${index})'>edit</b></td>`;
            html += "</tr>";

          }

        html += "</tr>";




     
        html += "</table>";
        // html += `<b onclick='edit(${index})'> - edit</b>`

        // html = "<ul>";

        // for(let index in dane){
        //     html += `<li>`;
        //     html += `${dane[index].name} ${dane[index].surname} ${dane[index].title} ${dane[index].format}`;
        //     html += `<b onclick='edit(${index})'> - edit</b>`;
        //     html += `</li>`;
        // }

        // html += "</ul>";
    }

    document.querySelector("div#showUser").innerHTML = html;

}


