// aufgabe 1_2

// let person = {
//   name: "Tayfun",
//   alter: 33,
//   sagNameAlter: () => {
//     // alert(person.name.alter);
//     alert(person.name + " " + person.alter);
//   },
// };

// person.sagNameAlter();

// Aufgabe 1_4

// let unsereHaustiere = [
//   {
//     tiertyp: "Katze",

//     names: ["Gipsy", "Nala", "Dinky"],
//   },
//   {
//     tiertyp: "Hunde",
//     names: ["Knöpfchen", "Pinselchen", "Droopy"],
//   },
// ];

// console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2]);
// console.log(unsereHaustiere[0].names);
// console.log(unsereHaustiere[1].names);

// unsereHaustiere[0].names = ["hallo", "BÖMER", "0123"];

// console.log(unsereHaustiere);

// Aufgabe 1_5

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

let Order1Umschreiben = (unserLager.schrank["Obere Schublade"].Ordner1 =
  "hallo");

console.log(Order1Umschreiben);
