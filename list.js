document.addEventListener("DOMContentLoaded", function () {
    show();
});

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
            html += "</tr>";

          }

        html += "</tr>";



     
        html += "</table>";
    }

    document.querySelector("div#showUser").innerHTML = html;

}


{/* <tr>
<td>{value.imie}</td>
<td>{value.nazwisko}</td>
<td>{value.email}</td>
<td>{value.telefon}</td>
<td>
    <a href={`/edytuj/${index}`}>edytuj</a>
</td>
<td>
    <a href={`/usun/${index}`}>usuń</a>
</td>
</tr> */}

