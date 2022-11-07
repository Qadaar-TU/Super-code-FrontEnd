// ========================== myVar=================

const inputHeightJohn = document.getElementById("inputHeightJohn");
const inputAgeJohn = document.getElementById("inputAgeJohn");

const inputHeightMike = document.getElementById("inputHeightMike");
const inputAgeMike = document.getElementById("inputAgeMike");

const resultJohn = document.getElementById("pointsJohn");
const resultMike = document.getElementById("pointsMike");
const winner = document.getElementById("Winner");

// ==================== Function =========================

function calculate(event) {
  event.preventDefault();

  let ageJohn = inputAgeJohn.value;
  let heightJohn = inputHeightJohn.value;

  let ageMike = inputAgeMike.value;
  let heightMike = inputHeightMike.value;

  let pointsJohn;
  let pointsMike;

  pointsJohn = ageJohn * 5 + heightJohn;
  pointsMike = ageMike * 5 + heightMike;

  resultJohn.innerHTML = pointsJohn;
  resultMike.innerHTML = pointsMike;

  if (pointsJohn > pointsMike) {
    winner.innerHTML = "John ist der winner!";
  } else if (pointsMike > pointsJohn) {
    winner.innerHTML = " Mike ist der Winner";
  } else if (pointsJohn == pointsMike) {
    winner.innerHTML = "Unentschieden";
  }
}
