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