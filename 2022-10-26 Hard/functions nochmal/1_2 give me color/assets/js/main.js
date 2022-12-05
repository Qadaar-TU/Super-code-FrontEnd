// Function die Hintergrund färbt.
// 1: Im HTML eine Form erstellen mit einem Input text (farbInput) und einem Input Submit (FarbMachine(event))

const body = document.querySelector("body");

const FarbMachine = (event) => {
  event.preventDefault();
  const input = document.getElementById("farbInput").value;
  body.style.backgroundColor = input;
};
