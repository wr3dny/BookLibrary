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

