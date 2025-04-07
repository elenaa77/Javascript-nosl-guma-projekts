let selectedCurrency = "USD";
const rates = {
  PLN: 4.204,
  EUR: 0.918,
  GBP: 0.786
};
 
function selectCurrency(curr) {  // šī funkcija tiek izmantota, lai izvēlētos valūtu, funkcija uzņem "curr" un atjaino pogas tekstu lai parādītu izvēlēto valūtu
  selectedCurrency = curr;
  document.getElementById("currencyBtn").textContent = `${curr} ▼`;
}
 
function convert() {
  const amount = parseFloat(document.getElementById("amount").value); // tiek izmantots, lai pārvērstu lietotāja ievadīto tekstu par decimālo skaitli, nodrošina veikt matemātiskas darbības ar skaitļiem, nevis ar virkņu datiem
  const result = document.getElementById("result");
 
  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Lūdzu, ievadiet derīgu pozitīvu summu!";
    return;
  }
 
  if (!rates[selectedCurrency]) {
    result.textContent = "Nezināma valūta!";
    return;
  }
 
  const converted = amount * rates[selectedCurrency];
  result.textContent = `Rezultāts: ${converted.toFixed(2)} ${selectedCurrency}`;
}
 
function updateDateTime() {
  const now = new Date();
  const options = {
    day: '2-digit', month: '2-digit', year: 'numeric', // "2-digit" ir formāts, kurš tiek izmantots, lai norādīt, kā vertība jāparāda divos ciparos
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  document.getElementById('datetime').textContent = now.toLocaleString('lv-LV', options);
}
 
setInterval(updateDateTime, 1000);  // šī funkcija nodrošina, kā funkcija tiek izsaukta katru sekundi
updateDateTime();