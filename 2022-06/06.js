//https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
function solve(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return arr.map(word => word.split('').reduce((sum, char, i) => alphabet[i] === char.toLowerCase() ? sum + 1 : sum, 0));
};

//https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
function isPowerOfTwo(n) {
  let current = 0;
  let i = 0;
  while (current <= n) {
    current = 2 ** i;
    i++;
    if (current === n) return true;
  }
  return false;
}

//https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
const greet = name => `Hello ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`;