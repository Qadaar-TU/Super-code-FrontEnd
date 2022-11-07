const text = "Sam is going to codingschool";

document.write(text + "<br>" + "<br>");

console.log(text.indexOf("Sam"));

// ================= myVars==========================

const sam = text.slice(0, 4);

const is = text.slice(4, 7);

const going = text.slice(7, 13);

const to = text.slice(13, 16);

const school = text.slice(22);

// ==============================

// ====================Satz1 ============================

const Satz1klein = text.replace("codingschool", "school");

document.write(Satz1klein.toUpperCase() + "<br>");

// ===============================================

//
//
// ================ Satz 2===============================

document.write(Satz1klein.replace("to", "at") + "<br>" + "<br>");

//
//
//
// ================ Satz 3 =======================

let Satz3 = sam.toUpperCase() + is + going + to + school.toUpperCase();

document.write(Satz3 + "<br>" + "<br>");

// =================== Satz 4 ========================

let Satz4 =
  sam.toLowerCase() +
  is.toUpperCase() +
  going.toUpperCase() +
  to.toUpperCase() +
  school;

document.write(Satz4 + "<br>" + "<br>");

// =================== Satz 5 ==========================

const sam2 = sam.charAt(0).toUpperCase() + sam.slice(1);

const is2 = is.charAt(0).toUpperCase() + is.slice(1);

const going2 = going.charAt(0).toUpperCase() + going.slice(1);

const to2 = to.charAt(0).toUpperCase() + to.slice(1);

const school2 = school.charAt(0).toUpperCase() + school.slice(1);

// Ergebnis: Aus school wurde School. Mit chatAt(0) wähle ich das "S" raus und mit slice(1) gibt er mir den rest des wortes raus.

document.write(sam2 + is2 + going2 + to2 + school2);
