// 1: Wir müssen erstmal den Button "Berechnen" mit dem JS koppeln. Dh wir geben ihm ein Onclick und einen Namen "check()".
// 2: Dann verbinden wir die 4 Radio inputs mit dem Button. Dafür erstellen wir eine function und geben den namen Check() wieder an, damit die Function mit dem Button gekoppelt wird .
// 3: Weil er einen String ausspuckt, geben wir ihm Number
// 4: Jetzt erstelle ich ein If else rechnung

function check(event) {
  event.preventDefault();

  let Radio1 = document.getElementById("Radio1").checked;

  let Radio2 = document.getElementById("Radio2").checked;

  let Radio3 = document.getElementById("Radio3").checked;

  let Radio4 = document.getElementById("Radio4").checked;

  let NettoBetrag = Number(document.getElementById("Nettobetrag").value);

  if (Radio1 == true && Radio3 == true) {
    // console.log("erstes if ist true");
    let Berechnung19 = NettoBetrag * 0.19;
    console.log(Berechnung19);
  } else if (Radio2 == true && Radio3 == true) {
    console.log("zweites if und else ist true");
  }
}
