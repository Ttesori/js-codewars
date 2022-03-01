//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
  return str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
function yearDays(year) {
  const days = year % 100 === 0 && year % 400 === 0 ? 366 : year % 4 === 0 && year % 100 !== 0 ? 366 : 365;
  return `${year} has ${days} days`;
}