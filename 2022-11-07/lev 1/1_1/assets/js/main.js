//     Level 1

// Aufgabe 1_1=====================================

for (let hello = 1; hello <= 10; hello++) {
  console.log("hello World", 1);
}

// Aufgabe 2_1

let numArray = [];

for (let i = 1; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// Aufgabe 1_4======================================

let names = [
  "freddy",
  "Steffen",
  "Finn",
  "Julia",
  "Franzi",
  "Christian",
  "Sergio",
];

for (let i = 0; i < 1; i++) {
  console.log(names);
}

// Aufgabe 1_6======================================

let retArray = [];

for (let u = 0; u < 100; u++) {
  retArray.push("image_" + u + ".jpg");
}
console.log(retArray);

// Aufgabe 1_9 =======================================

const textinput = document.getElementById("textInput");
const result = document.getElementById("result");
const Button = document.getElementById("btnEnter");

let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

Button.addEventListener("click", () => {
  event.preventDefault();
  console.log(Number(textinput.value));

  const filterMethode = words.filter(
    (word) => word.length == Number(textinput.value)
  );

  result.innerHTML = filterMethode;
});

//                   Level 2
// Aufgabe 2_1 ==============================================

function imageArray() {
  const returnArray = [];
  for (let b = 0; b <= 100; b++) {
    // returnArray.push("image_" + b + ".jpg");

    if (b < 10) {
      returnArray.push("image_00" + b + ".jpg");
    } else if (b <= 99) {
      returnArray.push("image_0" + b + ".jpg");
    } else {
      returnArray.push("image_" + b + ".jpg");
    }
  }

  console.log(returnArray);
}

imageArray();
