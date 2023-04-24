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

        html = "<ul>";

        for(let index in dane){
            html += `<li>`;
            html += `${dane[index].name} ${dane[index].surname} ${dane[index].title} ${dane[index].format}`;
            html += `</li>`;
        }

        html += "</ul>";
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

