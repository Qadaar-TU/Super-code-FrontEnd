let Schere = document.querySelector("#Schere");
let Stein = document.querySelector("#Stein");
let Papier = document.querySelector("#Papier");

Schere = 1;
Stein = 2;
Papier = 3;

let computerZahl = Math.floor(Math.random() * 3) + 1;

console.log(computerZahl);

// function play(event) {
//   event.preventDefault();
//   //   console.log(Schere.checked);
//   if (Schere.checked == true) {
//     console.log("schere ist ausgewählt");
//   } else if (Stein.checked == true) {
//     console.log("stein ist augewählt");
//   } else if (Papier.checked == true) {
//     console.log("Papier ist ausgewählt");
//   }
// }

// function Game(event) {
//   event.preventDefault();

// if (Schere < Stein) && Schere == Schere && Schere > Papier == true ) {

// }

//   if (Schere > Papier == true && Schere < Stein == true && Schere == Schere &&) {
