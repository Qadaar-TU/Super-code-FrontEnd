const outputHC = document.getElementById("hc-level");
const outputHE = document.getElementById("he-level");
const body = document.querySelector("body");

const checkAirQuality = () => {
  let rangeInput = document.getElementById("rangeSlider").value;
  console.log(rangeInput);

  if (rangeInput <= 50) {
    outputHC.innerHTML = "GOOD";
    outputHE.innerHTML = "Little or no risk";
    body.style.backgroundColor = "green";
  } else if (rangeInput > 50 && rangeInput < 100) {
    outputHC.innerHTML = "Moderate";
    outputHE.innerHTML = "Acceptable";
    body.style.backgroundColor = "Orange";
  } else if (rangeInput > 100 && rangeInput <= 150) {
    outputHC.innerHTML = "unhealthy";
    outputHE.innerHTML = "Corona or the Pest";
    body.style.backgroundColor = "Red";
  }
};
