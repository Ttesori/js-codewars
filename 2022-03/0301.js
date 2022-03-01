//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
  return str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}