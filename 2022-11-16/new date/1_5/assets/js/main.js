let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let myDate = new Date();

let monat = myDate.getMonth();

console.log(list[monat]); // aktueller Monat

console.log(list);
console.log(monat);

//
// aufgabe 1_6

let newDate = new Date();

let hours = newDate.getHours();

console.log(hours);

if (hours < 12) {
  console.log("AM");
} else if (hours > 12) {
  console.log("PM");
}
