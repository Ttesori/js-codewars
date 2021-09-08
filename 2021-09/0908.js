// https://www.codewars.com/kata/56b1f01c247c01db92000076
function doubleChar(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}

// https://www.codewars.com/kata/5772da22b89313a4d50012f7
function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string) {
  return string.split(' ');
}

// https://www.codewars.com/kata/555086d53eac039a2a000083
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
function solution(str, ending) {
  return str.endsWith(ending);
}

// https://www.codewars.com/kata/555eded1ad94b00403000071
function SeriesSum(n) {
  let sum = 0;
  for (let i = 1; i < 1 + (3 * n); i += 3) {
    sum += (1 / i);
  }
  return sum.toFixed(2).toString();
}

// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
  return on + wait < cap ? 0 : on + wait - cap;
}