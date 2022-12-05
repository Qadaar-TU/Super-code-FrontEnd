const ballValue2 = document.querySelector(".ball-2").value;
const ballValue3 = document.querySelector(".ball-3").value;
const ballValue4 = document.querySelector(".ball-4").value;

const body = document.querySelector("body");
const ha1 = document.querySelector("h1");

const changeColor1 = (event) => {
  event.preventDefault();

  body.style.backgroundColor = "#6f095f";
  ha1.style.color = "#1d8f53";
};

const changeColor2 = (event) => {
  event.preventDefault();

  body.style.backgroundColor = "red";
  ha1.style.color = "black";
};
