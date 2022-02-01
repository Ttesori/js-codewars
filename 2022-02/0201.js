// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
function nbDig(n, d) {
  let squares = [];
  for (let i = 0; i <= n; i++) {
    squares.push(i * i)
  }
  let digits = 0;
  squares.forEach(num => {
    String(num).split('').forEach(digit => digit == d ? digits++ : false)
  })
  return digits;
}