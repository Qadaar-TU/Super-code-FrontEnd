const Altersdifferenz = (event) => {
  event.preventDefault();

  let value1 = document.getElementById("alter1").value;
  let value2 = document.getElementById("alter2").value;

  differenz = value1 - value2;
  console.log(differenz);
  document.querySelector("h2").innerHTML = differenz;
};
