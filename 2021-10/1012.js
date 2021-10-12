// https://www.codewars.com/kata/56170e844da7c6f647000063
function peopleWithAgeDrink(old) {
  if (old < 14) return 'drink toddy';
  if (old < 18) return 'drink coke';
  if (old < 21) return 'drink beer';
  return 'drink whisky'
};

// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
function binToDec(bin) {
  return parseInt(bin, 2);
}

// https://www.codewars.com/kata/50ee6b0bdeab583673000025
var a = "code";
var b = "wa.rs";
var name = a + b;

// https://www.codewars.com/kata/569e09850a8e371ab200000b
function preFizz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}