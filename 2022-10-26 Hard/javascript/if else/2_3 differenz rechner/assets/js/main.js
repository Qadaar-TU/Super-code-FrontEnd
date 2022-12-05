const inputElement = document.getElementById("inputField");
const resultElement = document.getElementById("result");
const hintElemyent = document.getElementById("hint");

let counter = 0;

function doCalc(event) {
  event.preventDefault();

  let givenNumber = Number(inputElement.value);
  let difference = givenNumber - 27;

  inputElement.value = "";

  if (givenNumber > 27) {
    difference *= 2;
    resultElement.innerHTML = difference;
  }

  if (givenNumber <= 27) {
    resultElement.innerHTML = "Ha! Die Zahl muss größer als 27 sein.";
  }

  //   ??
  counter++;

  if (counter >= 4 && counter < 6) {
    hintElement.innerHTML = "Noch keine Idee, was gerechnet wird ?";
  }
}
