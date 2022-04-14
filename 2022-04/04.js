//https://www.codewars.com/kata/526471539d52735c620000c6/train/javascript
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};

//https://www.codewars.com/kata/57036f007fd72e3b77000023/train/javascript
class Solution {
  static main(x = '', y = '') {
    console.log("Hello World!");
  }
}

//https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return { name: this.firstName + ' ' + this.lastName, firstName: this.firstName, lastName: this.lastName };
}

//https://www.codewars.com/kata/566dc05f855b36a031000048/train/javascript
function addExtra(listOfNumbers) {
  return [...listOfNumbers, 1];
}

//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript
function bloodAlcoholContent(drinks, weight, sex, time) {
  let A = drinks.ounces * drinks.abv;
  let r = sex === 'male' ? .73 : .66;
  return +((A * (5.14 / weight) * r) - (.015 * time)).toFixed(4);
}