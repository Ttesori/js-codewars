//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
  if (n > 12 || n < 0) throw new RangeError('');
  return n === 0 ? 1 : n * factorial(n - 1);
}

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

//https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
const sumDigits = (number) => Math.abs(number).toString().split('').reduce((sum, num) => sum + Number(num), 0);

//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
  return str.match(/[a-z]/g).reverse().join('');
}

//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit) {
  return a.every(num => num <= limit);
}

//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a - b).join(''));
}