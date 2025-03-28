document.addEventListener("DOMContentLoaded", function () {
    const piedavajumi = [
        { valsts: "Došanās uz Ņujorku, autobusu-gājēju ekskursija pilsētā. Ņujorka (New York City) - pasaules nozīmes megapole un lielākā ASV pilsētā.", cena: 1200, attels: "Ņujorka.jpg" },
        { valsts: "Losandželosa ir otrā lielākā pilsēta ASV un atrodas Kalifornijas štatā. Kad jūs domājat par Losandželosu, lielākā daļa cilvēku domā par Holivudu, slavenībām un bagātību. ", cena: 1500, attels: "Losandželosa (2).jpg" },
        { valsts: "Maijami", cena: 1800, attels: "Maijami.png" },
        { valsts: "Čikāga ir pazīstama ar savu slaveno arhitektūru, bagāto kultūras un mākslas ainas, izcilu izklaides piedāvājumu un daudzveidīgo ēdienu.", cena: 2000, attels: "Cikaga.png" }
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


