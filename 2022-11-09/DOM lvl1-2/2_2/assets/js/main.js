function submito(event) {
  event.preventDefault();
  const vorName = document.getElementById("vorname").value;
  const nachName = document.getElementById("nachname").value;
  const land = document.getElementById("land").value;

  console.log(vorName, nachName, land);
}
