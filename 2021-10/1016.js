// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
function reverseList(list) {
  return list.reverse();
}

// https://www.codewars.com/kata/57faece99610ced690000165
function remove(s) {
  return s.replace(/!+$/g, '');
}

// https://www.codewars.com/kata/57126304cdbf63c6770012bd
function isDigit(s) {
  return s == parseFloat(s);
}

// https://www.codewars.com/kata/5810085c533d69f4980001cf
function calculator(a, b, sign) {
  if (isNaN(a) || isNaN(b)) return "unknown value";
  if (sign === '+') return a + b;
  if (sign === '-') return a - b;
  if (sign === '*') return a * b;
  if (sign === '/') return a / b;
  return "unknown value";
}

// https://www.codewars.com/kata/559ac78160f0be07c200005a
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}