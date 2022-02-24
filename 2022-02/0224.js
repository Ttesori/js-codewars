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

//

