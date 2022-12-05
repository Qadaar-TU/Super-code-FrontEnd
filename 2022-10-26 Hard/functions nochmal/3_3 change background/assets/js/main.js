// =================== myVars =====================
const redSlide = document.querySelector("#rangeSliderRed");
const greenSlide = document.querySelector("#rangeSliderGreen");
const blueSlide = document.querySelector("#rangeSliderBlue");

const bodyElement = document.querySelector("main");

function changeBackground(event) {
  event.preventDefault();

  let redValue = redSlide.value;
  let greenValue = greenSlide.value;
  let blueValue = blueSlide.value;

  bodyElement.style.backgroundColor =
    // "rgb(" + redValue + "," + blueValue + ", " + greenValue + ")";

    bodyElement.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
}

console.log("halloooooo");
