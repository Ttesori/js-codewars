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

//https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript
const findDigit = function (num, nth) {
  if (nth <= 0) return -1;
  const strNum = Math.abs(num).toString();
  if (nth > strNum.length) return 0;
  return Number(strNum[strNum.length - nth]);
};

//https://www.codewars.com/kata/5d50e3914861a500121e1958
function addLetters(...letters) {
  if (!letters || letters.length === 0) return 'z';
  const chars = 'zabcdefghijklmnopqrstuvwxyz'.split('');
  let val = [...letters].reduce((sum, char, i) => sum + chars.indexOf(char), 0);
  if (val > 26) val %= 26;
  return chars[val];
}

//https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
function sumCubes(n) {
  return n === 1 ? 1 : (n ** 3) + sumCubes(n - 1);
}