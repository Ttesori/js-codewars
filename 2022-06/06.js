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

//https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
function overTheRoad(address, n) {
  const total = n * 2;
  return total - address + 1;
}

//https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
function vertMirror(strng) {
  return strng.split('\n').map(line => line.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}

//https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
function partlist(arr) {
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    let arr1 = [];
    arr1.push(arr.slice(0, i).join(' '));
    arr1.push(arr.slice(i).join(' '));
    output.push(arr1);
  }
  return output;
}

//https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript
function averages(numbers) {
  return !numbers || numbers.length < 2 ? [] : numbers.map((num, i) => (num + numbers[i + 1]) / 2).slice(0, numbers.length - 1);
}

//https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript
function hasUniqueChars(str) {
  return str === [...new Set(str.split(''))].join('').toString();
}

//https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript
function sortGiftCode(code) {
  return code.split('').sort().join('');
}

//https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
function digits(n) {
  return n.toString().length;
}

//https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
function cubeOdd(arr) {
  if (arr.some(num => isNaN(Number(num)))) return undefined;
  return arr.map(num => Math.pow(num, 3)).filter(num => Math.abs(num) % 2 === 1).reduce((sum, num) => sum + num, 0);
}

//https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript
function inviteMoreWomen(L) {
  return L.reduce((sum, num) => sum + num, 0) <= 0 ? false : true;
}