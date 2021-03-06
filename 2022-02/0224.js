//https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript
function correctPolishLetters(string) {
  const dict = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
  }
  return string.split('').map(letter => dict[letter] || letter).join('');
}

//https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

//https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
function padIt(str, n) {
  let i = 1;
  while (i <= n) {
    if (i % 2 === 0) {
      str += '*'
    } else {
      str = '*' + str;
    }
    i++;
  }
  return str;
}

//https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript
function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}

// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/train/javascript
function charFreq(message) {
  const dict = {};
  message.split('').forEach(char => {
    if (dict[char]) {
      dict[char] = dict[char] + 1;
    } else {
      dict[char] = 1
    }
  });
  return dict;
}

//https://www.codewars.com/kata/55a14f75ceda999ced000048/train/javascript
var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
}

//https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript
function excludingVatPrice(price) {
  return price === null ? -1 : +(price / 1.15).toFixed(2);
}

//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript
function add(a, b) {
  return a == b;
}

//https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
class Ghost {
  constructor() {
    const rand = Math.floor(Math.random() * 4);
    const colors = ['white', 'yellow', 'purple', 'red']
    this.color = colors[rand];
  }
}

