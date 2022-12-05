// const konsolenAusgabe = () => {
//   console.log("hier steht jetzt was mit Verzögerung");
// };

// setTimeout(konsolenAusgabe, 2000);

// const Verzögerung = () => {
//   let time = new Date();

//   console.log(time);
// };

// setInterval(Verzögerung, 2000);

// const feierAbend = () => {
//   let time2 = 11;

//   if (time2 > 1) {
//     time2--;
//     console.log(time2);
//   }
// };

// // setInterval(feierAbend, 1000);

let count = 10;
let intervall;

function feierAbend() {
  if (count < 1) {
    console.log("endlich feierabend");
    clearInterval(intervall);
  } else {
    console.log(count--);
  }
}
// bei 42 sag ich ihm er soll die function feierabend losfeuern in 1er sekunden schritten
// es ist aber komischerweise kein normales function calling sondern als variable
// in 32 sag ich ihm er soll den intervall stoppen wenn count kleiner als 1 ist...er
// muss aber wissen welcher intervall, deswegen steht der name von zeile 42 nochmal
// in den klammern bei 32
intervall = setInterval(feierAbend, 1000);
