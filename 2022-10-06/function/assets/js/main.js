function intro(sayHi) {
  let a = 1 + 3;
  console.log("hello World");
  console.log("1+3 = " + a);
}

// intro();

// function intro2(paramName) {
// let varName = "Supercoder"
// console.log(`Hi, ${varName}. Mein Name ist ${paramName} .`)

// }

// intro2("Tayfun")

// Function mit Parameter sehr leicht erklärt
function intro3(paramName, paramStadt, paramAlter) {
  console.log(
    " Hallo, mein Name ist " +
      paramName +
      " Ich bin " +
      paramAlter +
      " Ich komme aus" +
      paramStadt
  );
}

intro3("Supercoder ", " Düsseldorf ", "27.");

// Jetzt kann ich hier statt Supercoder ,Düsseldorf und 27 was anderes eingeben und die
// function vielseitig verwenden.

// =====================================

function math(zahl1, zahl2) {
  console.log("-----Anfang------");

  console.log(zahl1 * zahl2);
  console.log(zahl1 / zahl2);
  console.log("-------Ende------");
  console.log("        ");
}

math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

// function mit parameter und return
// Zeile 13:  Mit Prompt wird ein Feld geöffnet. Er gibt jetzt 6 ein, diese wird mit "sum" was 7 darstellt multipliziert
// das heisst mit Return lassen wir uns den wert ausspucken, müssen diesen aber in einer Variable speichern (Zeile 12)...dann
// können wir diesen jederzeit wiederverwenden
