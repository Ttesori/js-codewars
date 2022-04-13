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