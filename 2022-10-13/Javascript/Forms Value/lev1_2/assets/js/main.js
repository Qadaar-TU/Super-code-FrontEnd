
function Altersberechnung() {

event.preventDefault();

const hazwei = document.querySelector ("h2");

const nummer = document.querySelector("#nameInput").value;

const differenz = 2022 - nummer ;

hazwei.innerHTML = "Du bist " + differenz + " Jahre alt";

}

