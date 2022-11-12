const output = document.querySelector("h1");

const Rechner = (event) => {
  event.preventDefault();
  const input = document.getElementById("bäm").value;
  output.innerHTML = input * 2;
};

// function Rechner(event) {
//   event.preventDefault();

//   const output = document.querySelector("h1");

//   const input = document.querySelector("#bäm").value;

//   output.innerHTML = "Das ergibt " + input * 2;

//   console.log("h2232454534i3g");
// }
