// function weatherMachine(event) {
//   event.preventDefault();

//   // ich spreche erstmal das input feld aus der HTML an
//   const inputElement = document.getElementById("number-input");
//   // ich ziehe den value raus
//   let weatherNumber = inputElement.value;
//   //  ??????
//   inputElement.value = "";
//   // ich erstelle eine VAR um später dass Value eintragen zu können
//   const resultElement = document.getElementById("weather-result");

//   if (weatherNumber >= 0 && weatherNumber <= 2) {
//     resultElement.innerHTML = "schlecht";
//     resultElement.style.color = "red";
//   } else if (weatherNumber >= 3 && weatherNumber <= 4) {
//     resultElement.innerHTML = "okay";
//     resultElement.style.color = "orange";
//   } else if (weatherNumber >= 5 && weatherNumber <= 7) {
//     resultElement.innerHTML = "gut";
//     resultElement.style.color = "blue";
//   } else if (weatherNumber >= 8 && weatherNumber <= 10) {
//     resultElement.innerHTML = "super";
//     resultElement.style.color = "green";
//   } else if (weatherNumber > 10 || weatherNumber < 0) {
//     resultElement.innerHTML = "Hey,nur Zahlen von 1-10";
//     resultElement.style.color = "red";
//   }
// }

const weatherMachine = (event) => {
  event.preventDefault();

  let inputValue = document.querySelector("#number-input").value;

  let numberValue = Number(inputValue);

  console.log(numberValue);

  if (numberValue >= 8 && numberValue <= 10) {
    console.log("super");
  } else if (numberValue >= 6 && numberValue <= 7) {
    console.log("gut");
  } else if (numberValue >= 3 && numberValue <= 5) {
    console.log("okay");
  } else if (numberValue >= 0 && numberValue <= 2) {
    console.log("schlecht");
  }
};
