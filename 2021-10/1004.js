// https://www.codewars.com/kata/5625618b1fe21ab49f00001f
function sayHello(name) {
  return `Hello, ${name}`
}

// https://www.codewars.com/kata/55902c5eaa8069a5b4000083
function formatMoney(amount) {
  return '$' + amount.toFixed(2)
}

// https://www.codewars.com/kata/55cbc3586671f6aa070000fb
function checkForFactor(base, factor) {
  return base % factor === 0;
}

// https://www.codewars.com/kata/5709bdd2f088096786000008
function superSize(num) {
  return Number(num.toString().split('').sort((a, b) => b - a).join(''));
}

// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
function xor(a, b) {
  if (a && b) return false;
  return a || b;
}