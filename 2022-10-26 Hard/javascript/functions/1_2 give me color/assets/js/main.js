// Function die Hintergrund färbt.
// 1: Im HTML eine Form erstellen mit einem Input text (farbInput) und einem Input Submit (FarbMachine(event))

function FarbMachine(event) {
  event.preventDefault();

  let Eingabe = document.getElementById("farbInput").value;

  document.body.style.backgroundColor = Eingabe;
}
