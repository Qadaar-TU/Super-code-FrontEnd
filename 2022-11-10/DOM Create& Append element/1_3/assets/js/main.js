const output = document.getElementById("output");
const unOrderedList = document.getElementById("myList");
const liste = document.body.children[0].children;
const buttons = document.body.children[1].children;
// const first = document.body.children[1].children[0];
// const zweit = document.body.children[1].children[2];
// const drei = document.body.children[1].children[4];
// const vier = document.body.children[1].children[6];

console.log(liste);
console.log(buttons[0]);

buttons[0].addEventListener("click", (event) => {
  event.preventDefault();
  output.innerHTML = liste[0].textContent;
});

buttons[2].addEventListener("click", (event) => {
  event.preventDefault();
  output.innerHTML = liste[6].textContent;
});

buttons[4].addEventListener("click", (event) => {
  event.preventDefault();
  output.innerHTML = liste[1].textContent;
});
buttons[6].addEventListener("click", (event) => {
  event.preventDefault();

  output.innerHTML = liste[5].textContent;
});
