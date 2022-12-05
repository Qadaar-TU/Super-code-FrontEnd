let vorname = "Tayfun";
let nachName = "Özakman";
let alter = 23;
let geburtsort = "Wiesbaden";
let größe = 1.65;
let gewicht = 70;
let hobbies = "Zocken";
let lieblingsSport = "Muay Thai";
let lieblingsEssen = "Döner";

//  String concetenation
let aufgabe1 =
  "Hallo, mein Name ist " +
  vorname +
  " " +
  nachName +
  " und ich bin " +
  alter +
  " Jahre alt." +
  "Ich bin in " +
  geburtsort +
  " geboren, und ich liebe es in der Freizeit zu " +
  hobbies;

console.log(aufgabe1);

// Template literals

let aufgabe2 = `Hallo, mein name ist ${vorname} ${nachName} und ich bin ${alter} Jahre alt. Ich bin in ${geburtsort} geboren, und ich liebe es in der Freizeit zu ${hobbies}`;

console.log(aufgabe2);
