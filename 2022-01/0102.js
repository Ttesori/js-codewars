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

// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce
const check = (a, x) => a.includes(x);

// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f
function buildString(...template) {
  return `I like ${template.join(', ')}!`;
}