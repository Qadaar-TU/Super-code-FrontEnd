let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");
let result = document.getElementById("liste");
let form1 = document.querySelector("form");
let text = document.getElementById("textInput");
//
let input;
let array = [];
//
const goGo = (event) => {
  event.preventDefault();
  input = text.value;
  array.push(`<li>${input}</li>`);
  result.innerHTML = array.join("");
  console.log(array);
};

removeButton.addEventListener(`click`, () => {
  // event.preventDefault();
  console.log(array);
  array.pop(input);
  result.innerHTML = array.join(" ");
});

//

// ======== Matthias' Variante=====

// const list = [];

// function showList() {
//   result.innerHTML = "";
//   list.forEach((element) => {
//     result.innerHTML += `<li>${element}<li>`;
//   });
// }

// form1.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// list.push(text.value);
// showList();
// text.value = "";

// removeButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   list.pop();
//   showList();
// });
// // ======================================
