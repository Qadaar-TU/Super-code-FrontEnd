let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const mal2undSort = array.map((bäm) => {
  console.log(bäm);

  return bäm * 2;
});

// console.log(mal2undSort.sort());
console.log(mal2undSort.sort((a, b) => a - b));
