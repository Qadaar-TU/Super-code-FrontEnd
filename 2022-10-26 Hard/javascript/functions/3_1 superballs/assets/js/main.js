const bodyElement = document.querySelector("body");

const hElement = document.querySelector("h1");

function changeColor1(event) {
  event.preventDefault();

  bodyElement.style.backgroundColor = "#1d8f53";
  hElement.style.color = "#6f095f";
}

function changeColor2(event) {
  event.preventDefault();

  bodyElement.style.backgroundColor = "#444170";
  hElement.style.color = "#daab43";
}

function changeColor3(event) {
  event.preventDefault();

  bodyElement.style.backgroundColor = "#c65d0a";
  hElement.style.color = "#000120";
}

function changeColor4(event) {
  bodyElement.style.backgroundColor = "#28ccff";
  hElement.style.color = "#060353";
}
