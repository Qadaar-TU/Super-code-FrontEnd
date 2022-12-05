const output = document.getElementById("bundeslandInfoErgebnis");

const check = () => {
  let textInput = document.getElementById("bundeslandInfo").value;

  switch (textInput) {
    case "Baden-Württemberg":
      output.innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "Bayern":
      output.innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "Berlin":
      output.innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "Brandenburg":
      output.innerHTML =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "Bremen":
      output.innerHTML =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "Hamburg":
      output.innerHTML =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "Hessen":
      output.innerHTML =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "Mecklenburg-Vorpommern":
      output.innerHTML =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "Niedersachsen":
      output.innerHTML =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "Nordrhein-Westfalen":
      output.innerHTML =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "Rheinland-Pfalz":
      output.innerHTML =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
    default:
      output.innerHTML = "Ein solches Bundesland gibt es nicht";
  }
};
