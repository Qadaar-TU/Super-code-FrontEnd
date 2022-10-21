

function Rechner() {
event.preventDefault();

const hazwei = document.querySelector("h2");

const one = document.querySelector("#eins").value;

const two = document.querySelector("#zwei").value;

const minus = one - two ;

hazwei.innerHTML = "Die Differenz ist: " + minus; 


}