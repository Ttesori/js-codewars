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

//https://www.codewars.com/kata/55849d76acd73f6cc4000087/train/javascript
function playerRankUp(points) {
  return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
}

//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
function sameCase(a, b) {
  if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) {
    // a is uppercase
    if (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90) {
      return 1;
    }
    if (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122) {
      return 0;
    }
  }
  if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) {
    // a is lowercase
    if (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122) {
      return 1;
    }
    if (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90) {
      return 0;
    }
  }
  return -1;
}

//https://www.codewars.com/kata/514a3996d22ce03198000003/train/javascript
Object.freeze(MrFreeze);

//https://www.codewars.com/kata/57037ed25a7263ac35000c80/train/javascript
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

//https://www.codewars.com/kata/56019d3b2c39ccde76000086/train/javascript
function doTurn() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

//https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
function cutCube(volume, n) {
  return Number.isInteger(Math.cbrt(volume)) && Number.isInteger(Math.cbrt(volume / n));
}