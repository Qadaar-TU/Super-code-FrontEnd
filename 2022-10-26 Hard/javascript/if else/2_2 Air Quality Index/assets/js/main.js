function checkAirQuality(event) {
  event.preventDefault();

  const sliderValue = document.getElementById("rangeSlider").value;
  const hcLevel = document.getElementById("hc-level");
  const heLevel = document.getElementById("he-level");
  const bodyElement = document.querySelector("body");

  if (sliderValue <= 50) {
    hcLevel.innerHTML = "Good";
    heLevel.innerHTML = "Little or no risk";
    bodyElement.style.background = "green";
  } else if (sliderValue > 50 && sliderValue <= 100) {
    hcLevel.innerHTML = "Moderate";
    heLevel.innerHTML = "Acceptable quality";
    bodyElement.style.background = "orange";
  } else if (sliderValue > 100 && sliderValue <= 150) {
    hcLevel.innerHTML = "Unhealthy for sensitive groups";
    heLevel.innerHTML = "Generable puplics not likely affected";
    bodyElement.style.background = "red";
  }
}
