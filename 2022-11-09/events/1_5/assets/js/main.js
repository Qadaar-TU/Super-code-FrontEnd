const button = document.getElementById("clickMe");

// Variante 1
// let zählerStand = 0;

// function onclickK() {
//   mausklick(++zählerStand);
// }

// function mausklick(eins) {
//   button.innerHTML = eins;
// }

// Variante 2
let zähler = 0;

function onclickK() {
  zähler++;
  button.innerHTML = `Click me:  ${zähler}`;
}
