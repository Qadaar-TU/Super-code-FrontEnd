let button = document.querySelector("#Button");
let Gradoutput = document.querySelector(".gradoutput");
let regenOutput = document.querySelector("#regenOutput");
let windStaerke = document.querySelector("#windstaerke");
let luftfeuchte = document.querySelector("#luftfeuchtigkeit");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let inputFeld = document.querySelector("#city").value;

  let api = "7d2b6b1a66dbbaa14c2018c6e7b64c47";
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputFeld}&appid=${api}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let latitude = data[0].lat;
      let longitude = data[0].lon;
      console.log(longitude);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // hier lasse ich die Gradzahl angeben
          let gradUmrechnung = data.main.temp - 273.15;
          let gradZahlGerundet = gradUmrechnung.toFixed(2);
          console.log(gradZahlGerundet);
          Gradoutput.innerHTML = `In ${inputFeld} ist es aktuell ${gradZahlGerundet} °C`;
          //  jetzt lasse ich ausgeben ob es regnet oder nicht

          let wetterStatus = data.weather[0].main;

          if (wetterStatus == "Clouds") {
            regenOutput.innerHTML = `In ${inputFeld} ist es bewölkt`;
          } else if (wetterStatus == "Rain") {
            regenOutput.innerHTML = `Aktuell regnet es in ${inputFeld}`;
          } else if (wetterStatus == "Snow") {
            regenOutput.innerHTML = `Aktuell schneit es in ${inputFeld}`;
          } else if (wetterStatus == "Clear") {
            regenOutput.innerHTML = `Aktuell scheint die Sonne in ${inputFeld}`;
          } else if (wetterStatus == "Mist") {
            regenOutput.innerHTML = `Es ist nebelig in ${inputFeld}`;
          }
          //===================== Ab hier gehts um Windstärke ==================

          let Staerke = data.wind.speed.toFixed(0);
          windStaerke.innerHTML = `In ${inputFeld} herrscht eine Windstärke von ${Staerke} Km/h.`;
          // console.log(data.wind.speed.toFixed(0));

          // jetzt geht es um die luftfeuchtigkeit
          let humidity = data.main.humidity;
          luftfeuchte.innerHTML = `Die Luftfeuchtigkeit in ${inputFeld} beträgt ${humidity}%`;
        });
    });
});
