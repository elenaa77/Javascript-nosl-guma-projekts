document.addEventListener("DOMContentLoaded", function () {
    const piedavajumi = [
        { valsts: "Ņujorka", cena: 1200, attels: "" },
        { valsts: "Losandželosa", cena: 1500, attels: "" },
        { valsts: "Maijami", cena: 1800, attels: "" },
        { valsts: "Čikāga", cena: 2000, attels: "" }
    ];
 
    function raditPiedavajumus(filtrEtiePiedavajumi = piedavajumi) {
        const piedavajumuKonteiners = document.getElementById("piedavajumi");
 
       
        piedavajumuKonteiners.innerHTML = "";// Notīra iepriekšējo saturu
       
        filtrEtiePiedavajumi.forEach(piedavajums => { //Metode .forEach() pārskata (iet cauri) masīvam filtrEtiePiedavajumi un izveido HTML elementus katram piedāvājumam.
            const piedavajumaBloks = document.createElement("div");
            piedavajumaBloks.classList.add("piedavajuma-kartite");
            piedavajumaBloks.innerHTML = `
                <img src="${piedavajums.attels}" alt="${piedavajums.valsts}">
                <h3>${piedavajums.valsts}</h3>
                <p>Cena: ${piedavajums.cena}$</p>
            `;
            piedavajumuKonteiners.appendChild(piedavajumaBloks);// Pievieno izveidoto bloku HTML lapā
        });
    }
    raditPiedavajumus();
});


