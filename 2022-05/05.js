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

//https://www.codewars.com/kata/56c5847f27be2c3db20009c3/solutions/javascript
const list = ["#", "kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple", "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape", "cherry", "pear", "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "orange", "apple", "orange", "grape", "orange", "grape", "cherry", "pear", "cherry", "pear", "apple", "pear", "kiwi", "banana", "kiwi", "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber", "orange", "cucumber", "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry", "pear", "kiwi", "pear", "kiwi", "banana", "apple", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "pineapple", "cucumber", "apple", "grape", "orange", "grape", "cherry", "grape", "cherry", "pear", "cherry", "apple", "kiwi", "banana", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple"];

function SubtractSum(n) {
  let sum = n.toString().split('').reduce((count, num) => Number(num) + count, 0);
  n = n - sum;
  while (n > 100) {
    let sum = n.toString().split('').reduce((count, num) => Number(num) + count, 0);
    n = n - sum;
  }
  return list[n];
}

//https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript
function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) return false;
  if (formula.includes(3) && formula.includes(4)) return false;
  if (formula.includes(5) && !formula.includes(6)) return false;
  if (formula.includes(6) && !formula.includes(5)) return false;
  if (!formula.includes(7) && !formula.includes(8)) return false;
  return true;
}

//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
function circleCircumference(circle) {
  return (2 * Math.PI * circle.radius);
}

//https://www.codewars.com/kata/59fc72fe235f93838b002235/train/javascript
function power(x, y) {
  if (x === 1) return 1;
  if (x === 0 && y === 0) return 1;
  return x ** y;
}

//https://www.codewars.com/kata/56be025f9347a066c7000e4f/train/javascript
Math.roundTo = function (number, precision) {
  return +number.toFixed(precision);
};

//https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
function eachCons(array, n) {
  let list = [];
  if (n > array.length) return list;

  for (let i = 0; i < array.length; i++) {
    list.push(array.slice(i, i + n));
    if (array[i + n] === undefined) break;
  }
  return list;
}

//https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/javascript
class Cube {
  constructor(n = 0) {
    this.side = Math.abs(n);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

//https://www.codewars.com/kata/5612a42e746aa62de100001a/train/javascript
const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12);

//https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript
function magNumber(info) {
  const weapons = {
    "PT92": 17,
    "M4A1": 30,
    "M16A2": 30,
    "PSG1": 5
  };
  return Math.ceil((info[1] * 3) / (weapons[info[0]]));
}
