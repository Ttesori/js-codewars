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
  return L.reduce((sum, num) => sum + num, 0) > 0;
}

//https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
function countRedBeads(n) {
  if (n < 2) return 0;
  return (n - 1) * 2;
}

//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
function automorphic(n) {
  return (n ** 2).toString().slice(-n.toString().length) === n.toString() ? "Automorphic" : "Not!!";
}

//https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
function isLeapYear(year) {
  return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
}

//https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
function solve(arr) {
  return arr.filter((num, i) => i === arr.lastIndexOf(num));
}

//https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript
function f(n) {
  if (!Number.isInteger(n) || n <= 0) return false;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript
function count(array) {
  const count = {};
  array.forEach(name => count[name] ? count[name] += 1 : count[name] = 1);
  return count;
}

//https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
function menFromBoys(arr) {
  arr = [...new Set(arr)];
  return [...arr.filter(num => num % 2 === 0).sort((a, b) => a - b), ...arr.filter(num => Math.abs(num) % 2 === 1).sort((a, b) => b - a)];
}

//https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
function gps(s, x) {
  return x.length > 1 ? Math.max(...x.map((num, i) => Math.floor((3600 * (x[i + 1] - num) / s))).slice(0, x.length - 1)) : 0;
}

//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
function generateShape(integer) {
  return `${'+'.repeat(integer)}\n`.repeat(integer - 1) + '+'.repeat(integer);
}

//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
function toNumberArray(strArr) {
  return strArr.map(str => Number(str));
}

//https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
const orderedCount = function (text) {
  const map = [];
  for (let i = 0; i < text.length; i++) {
    // If this isn't first instance of char, continue
    if (text.indexOf(text[i]) !== i) continue;
    let count = [text[i], 0];
    for (let j = i; j < text.length; j++) {
      if (text[i] === text[j]) {
        count[1]++;
      }
    }
    map.push(count);
  }
  return map;
};

//https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript
function foldTo(distance) {
  if (distance < 0) return null;
  let folds = 0;
  let thickness = .0001;
  while (thickness < distance) {
    thickness *= 2;
    folds++;
  }
  return folds;
}

//https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript
function triangle(row) {
  const map = {
    RR: 'R',
    RG: 'B',
    RB: 'G',
    GR: 'B',
    GG: 'G',
    GB: 'R',
    BR: 'G',
    BG: 'R',
    BB: 'B'
  };
  while (row.length > 1) {
    let newRow = '';
    for (let i = 0; i < row.length - 1; i++) {
      newRow += map[row[i] + row[i + 1]];
    }
    row = newRow;
  }
  return row;
}

//https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript
function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5;
}

//https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
function balancedNum(number) {
  let numStr = number.toString().split('');
  if (numStr.length <= 2) return 'Balanced';

  let index = numStr.length % 2 === 0 ? [(numStr.length / 2) - 1, numStr.length / 2] : [Math.floor(numStr.length / 2)];
  let left = 0;
  let right = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (index.includes(i)) continue;
    if (i < index[0]) left += Number(numStr[i]);
    if (i > index[index.length - 1]) right += Number(numStr[i]);
  }

  return left === right ? 'Balanced' : 'Not Balanced';
}

//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
function maxDiff(list) {
  return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;
};

//https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 0;
  let height = 0;
  let night = false;
  while (height < desiredHeight) {
    day += .5;
    night ? height -= downSpeed : height += upSpeed;
    night = !night;
  }
  return Math.ceil(day);
}

//https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
function myLanguages(results) {
  let list = [];
  for (let lang in results) {
    if (results[lang] >= 60) list.push([lang, results[lang]]);
  }
  return list.sort((a, b) => b[1] - a[1]).map(el => el[0]);
}

//https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
function switcheroo(x) {
  return x.split('').map(char => char === 'a' ? 'b' : char === 'b' ? 'a' : 'c').join('');
}

//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript
function sumEvenNumbers(input) {
  return input.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

//https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
Array.prototype.square = function () {
  return this.map(el => el ** 2);
};

Array.prototype.cube = function () {
  return this.map(el => el ** 3);
};

Array.prototype.average = function () {
  return this.length > 0 ? this.sum() / this.length : NaN;
};

Array.prototype.sum = function () {
  return this.reduce((sum, el) => sum + el, 0);
};

Array.prototype.even = function () {
  return this.filter(el => el % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(el => el % 2 === 1);
};

//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature, n) {
  if (n < 3) return signature.slice(0, n);
  for (let i = signature.length - 1; signature.length < n; i++) {
    signature.push(signature[i] + signature[i - 1] + signature[i - 2]);
  }
  return signature;
}

//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
const uniqueInOrder = iterable => {
  if (typeof iterable === 'string') iterable = iterable.split('');
  return iterable.filter((char, i) => char !== iterable[i + 1]);
};

//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
  const strNum = value.toString();
  return strNum.length > 1 ? strNum.split('').map(num => Number(num) ** strNum.length).reduce((sum, num) => sum + num, 0) === value : true;
}


