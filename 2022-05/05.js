//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
  if (n > 12 || n < 0) throw new RangeError('');
  return n === 0 ? 1 : n * factorial(n - 1);
}

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}