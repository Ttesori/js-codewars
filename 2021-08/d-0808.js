// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  if (!Number.isInteger(Math.sqrt(sq))) return -1;
  for (let i = sq + 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (Number.isInteger(Math.sqrt(i))) return i;
  }
}

console.log(findNextSquare(121) === 144);
console.log(findNextSquare(625) === 676);
console.log(findNextSquare(319225) === 320356);
console.log(findNextSquare(15241383936) === 15241630849);
console.log(findNextSquare(155) === -1);
console.log(findNextSquare(342786627) === -1);