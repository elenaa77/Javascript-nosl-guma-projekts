document.addEventListener("DOMContentLoaded", function () {
    const piedavajumi = [
        { valsts: "Došanās uz Ņujorku, autobusu-gājēju ekskursija pilsētā. Ņujorka (New York City) - pasaules nozīmes megapole un lielākā ASV pilsētā.", cena: 1200, attels: "Ņujorka.jpg" },
        { valsts: "Losandželosa ir otrā lielākā pilsēta ASV un atrodas Kalifornijas štatā. Kad jūs domājat par Losandželosu, lielākā daļa cilvēku domā par Holivudu, slavenībām un bagātību.", cena: 1500, attels: "Losandželosa (2).jpg" },
        { valsts: "Maiami ir viena no dārgākajām, krāšņākajām un populārākajām pilsētām pasaulē. Un viena no Amerikas daļām, kurās angliski nerunā.", cena: 1800, attels: "Maijami.png" },
        { valsts: "Čikāga ir pazīstama ar savu slaveno arhitektūru, bagāto kultūras un mākslas ainas, izcilu izklaides piedāvājumu un daudzveidīgo ēdienu.", cena: 2000, attels: "Cikaga.png" }
    ];
    function raditPiedavajumus(filtrEtiePiedavajumi = piedavajumi) {
        const piedavajumuKonteiners = document.getElementById("piedavajumi");
        piedavajumuKonteiners.innerHTML = ""; 

        filtrEtiePiedavajumi.forEach(piedavajums => {
            const piedavajumaBloks = document.createElement("div");
            piedavajumaBloks.classList.add("piedavajuma-kartite");
            piedavajumaBloks.innerHTML = `
                <img src="${piedavajums.attels}" alt="${piedavajums.valsts}">
                <h3>${piedavajums.valsts}</h3>
                <p>Cena: ${piedavajums.cena}$</p>
            `;
            piedavajumuKonteiners.appendChild(piedavajumaBloks); 
        });
    }
    document.getElementById("cenu-filtrs").addEventListener("input", function () {
        const maxCena = parseInt(this.value); // Iegūst lietotāja norādīto cenu
        document.getElementById("cenas-vertiba").textContent = `${maxCena}$`;
        const filtrEtiePiedavajumi = piedavajumi.filter(piedavajums => piedavajums.cena <= maxCena);
        raditPiedavajumus(filtrEtiePiedavajumi);
    });
//Spēle
    raditPiedavajumus(); 
    const spelesPiedavajumi = [
        { valsts: "Maiami", cena: 1800, attels: "Maijami.jpg" },
        { valsts: "Parīze", cena: 2500, attels: "paris.jpg" },
        { valsts: "Tokija", cena: 3200, attels: "lalalalalala/Ņujorka.jpg" },
        { valsts: "Londona", cena: 2200, attels: "london.jpg" },
        { valsts: "Roma", cena: 2700, attels: "rome.jpg" },
        { valsts: "Berlīne", cena: 2000, attels: "berlin.jpg" }
    ];

    let meginajumi = 0;
    let maxMeginajumi = 3;
    let pasreizejaisPiedavajumaIndex = 0;

    function sakSpele() {
        if (meginajumi < maxMeginajumi) {
            const izveletsPiedavajums = spelesPiedavajumi[pasreizejaisPiedavajumaIndex];
            document.getElementById("minejuma-teksts").textContent = `Uzminiet, cik varētu maksāt ceļojums uz ${izveletsPiedavajums.valsts}!`;
            document.getElementById("meginajumu-teksts").textContent = `Atlikušie mēģinājumi: ${maxMeginajumi - meginajumi}`;
            document.getElementById("speles-rezultats").textContent = "";
        } else {
            document.getElementById("minejuma-teksts").textContent = "Visas iespējas ir izsmeltas!";
            document.getElementById("speles-rezultats").textContent = "Diemžēl neizdevās uzminēt ceļojumu cenas.";
        }
    }
    document.getElementById("parbaudit-cenu").addEventListener("click", function () {
        const minejums = parseInt(document.getElementById("minejuma-ievade").value);
        const pareizaisPiedavajums = spelesPiedavajumi[pasreizejaisPiedavajumaIndex];

        if (!isNaN(minejums)) {
            if (minejums === pareizaisPiedavajums.cena) {
                document.getElementById("speles-rezultats").textContent = `Pareizi! Ceļojums uz ${pareizaisPiedavajums.valsts} maksā ${pareizaisPiedavajums.cena}$.`;
                document.getElementById("pareiza-valsts-attels").src = pareizaisPiedavajums.attels;
            } else {
                meginajumi++; // Pievieno mēģinājumu
                if (meginajumi < maxMeginajumi) {
                    document.getElementById("speles-rezultats").textContent = `Nepareizi! Pareizā cena bija ${pareizaisPiedavajums.cena}$. Mēģiniet ar citu valsti.`;
                    pasreizejaisPiedavajumaIndex = (pasreizejaisPiedavajumaIndex + 1) % spelesPiedavajumi.length; // Nomaina piedāvājumu
                    sakSpele();
                } else {
                    document.getElementById("speles-rezultats").textContent = `Diemžēl neizdevās. Pareizā cena bija ${pareizaisPiedavajums.cena}$.`;
                }
            }
        } else {
            document.getElementById("speles-rezultats").textContent = "Lūdzu, ievadiet derīgu summu!";
        }
    });
    sakSpele(); 
});
