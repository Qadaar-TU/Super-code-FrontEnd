//  Mit diesen Vars sagen wir dem JS 2 Dinge
// A: dass es diese input felder überhaupt gibt im HTML
// B: wir übersetzen von HTML in JS sprache damit er auf das HTML zugreifen kann
// ==================== myVars =======================

const sliderElement = document.getElementById("rangeSlider");

const selectElement = document.getElementById("fonts-select");

const textInputElement = document.getElementById("inputField");

const resultElement = document.getElementById("result");

// 1: Ich erstelle eine Function und verbinde sie mit den HTML Input feldern durch changeFontSize(event)
//
const changeFontsSize = () => {
  // 2: Hier sage ich dass er den Value rausziehen soll und in eine Variable reinpacken soll

  let myFontSize = sliderElement.value + "px";
  let myFontFamily = selectElement.value;
  let inputValue = textInputElement.value;
  //2:Jetzt sage ich er soll den Value von oben $in die h1 packen
  resultElement.style.fontSize = myFontSize;
  resultElement.style.fontFamily = myFontFamily;
  resultElement.innerHTML = inputValue;
  // Wenn mein text.input leer ist , dann schreib in die h1 "test"
};
