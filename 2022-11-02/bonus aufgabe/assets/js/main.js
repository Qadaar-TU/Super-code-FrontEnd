// "use strict";

// let text = document.getElementById("textInput");
// let addButton = document.getElementById("add");
// let removeButton = document.getElementById("remove");
// let result = document.getElementById("liste");
// let form1 = document.querySelector("form");

// // ======== Matthias' Variante=====

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

// //  Übungen zu loop

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

// //lass 5x "******" in der console erscheinen

// for (let s = 0; s < 5; s++) {
//   console.log("*****");
// }
// //
// //
// // lass in der console folgendes ausgeben
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// // *******

// let stars = ``;
// for (let baum = 0; baum < 7; baum++) {
//   stars += `*`;
//   console.log(stars);
// }

// //
// //

// for (let a = 5; a <= 10; a++) {
//   console.log(a);
// }

// for (let q = 50; q >= 45; q--) {
//   console.log(q);
// }

// let arr = [10, 20, 30];
// for (let d = 10; d <= 60; d * 2) {
//   console.log(d);
// }

// =======================
