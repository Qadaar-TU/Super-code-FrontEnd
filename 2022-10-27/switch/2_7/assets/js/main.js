const outputGröße = document.querySelector(".boxMasse");
const outputGewicht = document.querySelector("#masse");

const showtxt = (event) => {
  event.preventDefault();
  let formElement = document.getElementById("mylist");
  let input = Number(formElement.value);
  console.log(input);

  switch (input) {
    case 0:
      outputGewicht.innerHTML = `<b>Brief und Postkarte</b> <br>
      L: 10 - 23,5 cm
      B: 7 - 12,5 cm
      H: bis 1 cm `;
      break;
    case 1:
      outputGewicht.innerHTML = `
        <b>DHL Paket 2 kg</b> <br>
              bis 60 x 30 x 15 cm`;
      break;
    case 2:
      outputGewicht.innerHTML = `<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm`;
      break;
    case 3:
      outputGewicht.innerHTML = `<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm`;
      break;
  }
};
