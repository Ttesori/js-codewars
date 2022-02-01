// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
function nbDig(n, d) {
  let digits = 0;
  for (let i = 0; i <= n; i++) {
    String(i * i).split('').forEach(digit => digit == d ? digits++ : false);
  }
  return digits;
}