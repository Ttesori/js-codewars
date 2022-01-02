// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0
function remove(s) {
  return s.replace(/!/g, '') + '!';
}

// https://www.codewars.com/kata/557af9418895e44de7000053
var repeatIt = function (str, n) {
  return typeof str === "string" ? str.repeat(n) : 'Not a string';
}

// https://www.codewars.com/kata/58630e2ae88af44d2b0000ea
function isDivisible(wallLength, pixelSize) {
  return wallLength % pixelSize === 0;
}