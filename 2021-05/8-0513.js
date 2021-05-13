// Convert number to reversed array of digits
function digitize(n) {
  return n.toString().split('').reverse().map(num => parseInt(num));
}

// Abbreviate a Two Word Name
function abbrevName(name) {
  return name.split(' ').map(word => word[0]).join('.').toUpperCase();
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return (n % x === 0) && (n % y === 0);
}

// Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

// Square(n) Sum
function squareSum(numbers) {
  return numbers.reduce((count, number) => (number * number) + count, 0);
}

// Counting sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep).length;
}

// Convert a Number to a String!
function numberToString(num) {
  return String(num);
}

// Remove String Spaces
function noSpace(x) {
  return x.replace(/\s/g, '');
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Grasshopper - Summation
function summation(num) {
  if (num === 1) return 1;
  return num + summation(num - 1);
}

// Reversed Strings
function solution(str) {
  return str.split('').reverse().join('');
}

// Repeat String
function repeatStr(n, s) {
  return s.repeat(n);
}

// Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
};