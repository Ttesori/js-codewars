// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
function nbDig(n, d) {
  let digits = 0;
  for (let i = 0; i <= n; i++) {
    String(i * i).split('').forEach(digit => digit == d ? digits++ : false);
  }
  return digits;
}

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
  let divisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisors++;
  }
  return divisors;
}

// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
};