const text = "Sam is good at codingschool";

document.write(text + "<br>" + "<br>");

// Mit indexOf suche ich erstmal an welcher Stelle "school steht "

console.log(text.indexOf("school"));

const school = text.slice(21);

// Dann mache ich mir eine Var um codingschool mit school zu tauschen

const Satz1 = text.replace("codingschool", school);

// Jetzt ist das ergebnis von Satz1 "Sam is good at school"

//

//
const Satz2 = Satz1.replace("good", "bad");

// Ich sage ihm jetzt er soll bei Satz1 das good wegmachen und bad hinsetzen

document.write(Satz2 + "<br>" + "<br>");

// ======================== SUSI ========================

const Susi1 = Satz1.replace("Sam", "Susi");

document.write(Susi1 + "<br>" + "<br>");

const tennis = text.replace("codingschool", "Tennis");

document.write(tennis);
