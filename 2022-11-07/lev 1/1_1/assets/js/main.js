//     Level 1

// Aufgabe 1_1=====================================

// for (let hello = 1; hello <= 10; hello++) {
//   console.log("hello World", 1);
// }

// // Aufgabe 2_1

// let numArray = [];

// for (let i = 1; i <= 10; i++) {
//   numArray.push(i);
// }
// console.log(numArray);

// // Aufgabe 1_4======================================

// let names = [
//   "freddy",
//   "Steffen",
//   "Finn",
//   "Julia",
//   "Franzi",
//   "Christian",
//   "Sergio",
// ];

// for (let i = 0; i < 1; i++) {
//   console.log(names);
// }

// // Aufgabe 1_6======================================

// let retArray = [];

// for (let u = 0; u < 100; u++) {
//   retArray.push("image_" + u + ".jpg");
// }
// console.log(retArray);

// // Aufgabe 1_9 =======================================

// const textinput = document.getElementById("textInput");
// const result = document.getElementById("result");
// const Button = document.getElementById("btnEnter");

// let words = [
//   "hallo",
//   "Auto",
//   "Waschmaschine",
//   "Schrank",
//   "Katze",
//   "Beispiel",
//   "Eltern",
//   "Fenster",
//   "Geburtstag",
//   "Himmel",
//   "schwimmen",
//   "Zeitung",
// ];

// Button.addEventListener("click", () => {
//   event.preventDefault();
//   console.log(Number(textinput.value));

//   const filterMethode = words.filter(
//     (word) => word.length == Number(textinput.value)
//   );

//   result.innerHTML = filterMethode;
// });

// //                   Level 2
// // Aufgabe 2_1 ==============================================

// function imageArray() {
//   const returnArray = [];
//   for (let i = 1; i <= 100; i++) {
//     // returnArray.push("image_" + b + ".jpg");

//     if (i < 10) {
//       returnArray.push("image_00" + i + ".jpg");
//     } else if (i <= 99) {
//       returnArray.push("image_0" + i + ".jpg");
//     } else {
//       returnArray.push("image_" + i + ".jpg");
//     }
//   }

//   console.log(returnArray);
// }

// imageArray();

// ==================2_2=====================

const numInput = document.querySelector("#numberInput");
const submitButton = document.querySelector("#subButton");
const resultElement = document.querySelector("#ergebnis");

// function loop(event) {
//   event.preventDefault();
//   console.log(Number(numInput.value));
// }

function loop(event) {
  event.preventDefault();
  let bäm = "";

  for (let i = 0; i < numInput.value; i++) {
    bäm += "o";
  }
  resultElement.innerHTML = "L" + bäm + "p";
}

// ========= 3_1 ===================

// ===============================================
//           Zusammenarbeit mit Mike
// ===============================================

function splitText(){
  // Wir erstellen ein leeres Array um den Text in ein Array zu verschachteln
  let myArray = [];
  // Wir teilen die Textlänge durch 100 und runden auf mit Math.ceil() um den Text in hunderter-Schritte einzuteilen.weil JS kann nicht 26,3 Loops ausführen
  let variable = Math.ceil(text.length / 100);
  console.log(variable);
  //Im folgenden wird eine for Schleife erstellt.
  //Schleife, weil es automatisch die Textschnipsel in den Array packt.
  for (let i = 0; i < variable ; i++){
      // Die Variable x speichert den Wert von den ersten 100 Zeichen der variable text.
      let x = text.substring(0,100);
      //Das Ergebnis wird somit in das Array gepushed.
      myArray.push(${x} - ${i+1} of ${variable});
      // damit er nicht nur die ersten Hundert Zeichen nimmt, befehlen wir ihm, dass er die nächten 100er Zeichen durchlaufen soll bis i < variable erreicht ist.
      text = text.replace(x, "");
  }
  console.log(myArray);
}
splitText()

// function textaufteilung() {
//   let leeresArray = [];

//   let hunderterZeile = Math.ceil(text.length / 100);

//   for (let i = 0; i < hunderterZeile; i++) {
//     let erstenHundert = text.substring(0, 100);

//     leeresArray.push(`${} - ${i + 1} of ${hunderterZeile}`);
//     text = text.replace(erstenHundert, "");
//   }
// }

// textaufteilung();
