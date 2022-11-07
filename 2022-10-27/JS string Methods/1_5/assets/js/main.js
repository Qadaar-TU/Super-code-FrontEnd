const text = "Susi is back from codingschool";

console.log(text.substring(0, 4));

console.log(text.substring(5, 7));

console.log(text.substring(24, 30));

// ===============================

const myVar1 = text.substring(0, 8);

const myVar2 = myVar1 + text.slice(24, 30);

console.log(myVar2);
