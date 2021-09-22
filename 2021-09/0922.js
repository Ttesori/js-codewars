// https://www.codewars.com/kata/5a023c426975981341000014
function otherAngle(a, b) {
  return 180 - a - b;
}

// https://www.codewars.com/kata/55eca815d0d20962e1000106
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// https://www.codewars.com/kata/57d814e4950d8489720008db
function index(array, n) {
  return n > array.length - 1 ? -1 : array[n] ** n;
}

// https://www.codewars.com/kata/58cb43f4256836ed95000f97
function findDifference(a, b) {
  let aSum = a[0] * a[1] * a[2];
  let bSum = b[0] * b[1] * b[2];
  return Math.max(aSum, bSum) - Math.min(aSum, bSum);
}

// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
String.prototype.isUpperCase = function () {
  return this.split('').every(char => char === char.toUpperCase());
}