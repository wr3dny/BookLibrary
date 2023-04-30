document.addEventListener("DOMContentLoaded", function () {
    show();
});

remove = (index) => {
    let daneJSON = localStorage.getItem('BK');
    let dane = JSON.parse(daneJSON);

    dane.splice(index, 1);
    localStorage.setItem('BK', JSON.stringify(dane));

    show();
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
        html += "</tr>";

        html += "<tr>";
        for(let index in dane){
            html += `<td>${dane[index].name}</td>`;
            html += `<td>${dane[index].surname}</td>`;
            html += `<td>${dane[index].title}</td>`;
            html += `<td>${dane[index].format}</td>`;
            html += `<td onclick='remove(${index})'><b>remove</b></td>`;
            html += "</tr>";
          }
        html += "</tr>";
        html += "</table>";






        // html = "<ul>";

        // for(let index in dane){
        //     html += `<li>`;
        //     html += `${dane[index].name} ${dane[index].surname} ${dane[index].title} ${dane[index].format}`;
        //     html += `<b onclick='remove(${index})'> - remove</b>`;
        //     html += `</li>`;
        // }

        // html += "</ul>";
    }

    document.querySelector("div#showUser").innerHTML = html;

}

