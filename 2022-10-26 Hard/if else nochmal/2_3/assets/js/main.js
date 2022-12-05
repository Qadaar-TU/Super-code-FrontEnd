const output = document.getElementById("result");
const hint = document.getElementById("hint");

let counter = 0;

function doCalc(event) {
  event.preventDefault();
  inputFeld = document.getElementById("inputField").value;
  let givenNumber = Number(inputFeld);
  let differenz = givenNumber - 27;

  if (givenNumber > 27) {
    differenz *= 2;
    output.innerHTML = differenz;
  } else if (givenNumber <= 27) {
    output.innerHTML = "Ha! die Zahl muss größer sein als 27";
  }
  counter++;
  if (counter >= 4 && counter < 6) {
    hint.innerHTML = "Noch keine Idee, was gerechnet wird ?";
  }
}
