// https://www.codewars.com/kata/57fae964d80daa229d000126
function remove(s) {
  return s.replace(/!$/g, '');
}

// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
function arrayMadness(a, b) {
  return a.reduce((sum, num) => sum += (num * num), 0) > b.reduce((sum, num) => sum += (num * num * num), 0)
}

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) arr.push(i);
  }
  return arr;
}

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

// https://www.codewars.com/kata/555a67db74814aa4ee0001b5
function testEven(n) {
  return !(n % 2);
}