const outputJohn = document.querySelector("#pointsJohn");
const outputMike = document.querySelector("#pointsMike");
const Winner = document.querySelector("#Winner");

const calculate = (event) => {
  event.preventDefault();
  let inputHeightJohn = document.querySelector("#inputHeightJohn").value;
  let inputAgeJohn = document.querySelector("#inputAgeJohn").value;
  let inputHeightMike = document.querySelector("#inputHeightMike").value;
  let inputAgeMike = document.querySelector("#inputAgeMike").value;

  inputAgeJohn = inputAgeJohn * 5;
  inputAgeMike = inputAgeMike * 5;

  let additionJohn = inputAgeJohn + inputHeightJohn;
  let addiditonMike = inputAgeMike + inputHeightMike;

  let John = (outputJohn.innerHTML = additionJohn);
  let Mike = (outputMike.innerHTML = addiditonMike);

  if (Mike > John) {
    WinHTML = "Mike ist der Gewinner";
  } else if (John > Mike) {
    Winner.innerHTML = " John ist der Gewinner";
  } else if (John == Mike) {
    Winner.innerHTML = "Unentschieden";
  }
};
