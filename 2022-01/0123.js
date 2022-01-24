//https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
function sumMul(n, m) {
  if (m <= 0) return "INVALID";
  let count = 0;
  for (let i = n; i < m; i += n) {
    count += i;
  }
  return count;
}