let monate = [
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

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let date1 = new Date();

document.write(date1, "<br></br>");

document.write(date1.getFullYear(), "<br></br>");

document.write(date1.getMonth() + " Monat", "<br></br>");

document.write(date1.getDay() + " Tag", "<br></br>");

document.write(date1.getHours() + " Stunde", "<br></br>");

document.write(date1.getMinutes() + " Minute", "<br></br>");

document.write(wochenTag[date1.getDay()], "<br></br>");

document.write(monate[date1.getMonth()], "<br></br>");
