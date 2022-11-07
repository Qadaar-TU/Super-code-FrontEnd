let deutscheGerichte = [
  "Speckkuchen",
  "Thüringer Rostbratwurst",
  "Quarkkeulchen",
  "Sauerbraten",
];

let deutscheGerichte2 = deutscheGerichte.unshift(
  "currywurst",
  "schweinemeddalion",
  "eierschwämmchensuppe"
);

console.log(deutscheGerichte);

deutscheGerichte.shift();
deutscheGerichte.shift();
deutscheGerichte.shift();

console.log(deutscheGerichte);
