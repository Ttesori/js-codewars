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

//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url) {
  return url.split('#')[0];
}


//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s) {
  const count = s.split('').reduce((res, char) => char === char.toUpperCase() ? [res[0], res[1] + 1] : [res[0] + 1, res[1]], [0, 0]);
  if (count[0] > count[1]) {
    return s.toLowerCase();
  } else if (count[0] < count[1]) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
function inAscOrder(arr) {
  return arr.toString() === arr.sort((a, b) => a - b).toString();
}

//https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript
var hotpo = function (n) {
  let count = 0;
  while (n !== 1) {
    count++;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
  }
  return count;
};

//https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript
const quadratic = (x1, x2) => [1, -x1 + -x2, -x1 * -x2];

//https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript
function barTriang(p1, p2, p3) {
  return [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4), +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)];
}

//https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
const countSquares = cuts => (cuts ? 6 * cuts ** 2 + 2 : 1);

//https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript
const symmetricPoint = ([x1, y1], [x2, y2]) => [x2 * 2 - x1, y2 * 2 - y1];