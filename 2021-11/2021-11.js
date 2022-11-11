//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
function yearDays(year) {
  const days = year % 100 === 0 && year % 400 === 0 ? 366 : year % 4 === 0 && year % 100 !== 0 ? 366 : 365;
  return `${year} has ${days} days`;
}

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
  return str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

//https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
function ensureQuestion(s) {
  return s[s.length - 1] === '?' ? s : s + '?';
}

//https://www.codewars.com/kata/511f0fe64ae8683297000001/train/javascript
websites.push('codewars');

//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(string) {
  return string.length > 0 ? string.split(' ').map(word => 'sex').join(' ') : '';
}

//https://www.codewars.com/kata/55a14aa4817efe41c20000bc/train/javascript
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}