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

        html = "<ul>";

        for(let index in dane){
            html += `<li>`;
            html += `${dane[index].name} ${dane[index].surname} ${dane[index].title} ${dane[index].format}`;
            html += `<b onclick='remove(${index})'> - remove</b>`;
            html += `</li>`;
        }

        html += "</ul>";
    }

    document.querySelector("div#showUser").innerHTML = html;

}

