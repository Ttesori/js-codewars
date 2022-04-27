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

//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) return "It's a black array";
  if (arr.indexOf(5) === -1 || arr.indexOf(13) === -1) return "It's a white array";
}

//https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
function logicalCalc(arr, op) {
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (op === "AND") {
      curr = curr && arr[i];
    } else if (op === "OR") {
      curr = curr || arr[i];
    } else if (op === "XOR") {
      curr = curr ^ arr[i];
    }
  }
  return Boolean(curr);
}

//https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
function slope(points) {
  return points[2] - points[0] !== 0 ? `${(points[3] - points[1]) / (points[2] - points[0])}` : "undefined";
}

//https://www.codewars.com/kata/574c5075d27783851800169e/train/javascript
function animals(heads, legs) {
  const leg4 = (legs / 2) - heads;
  const leg2 = heads - leg4;
  if (!Number.isInteger(leg4) || leg4 < 0 || leg2 < 0) return "No solutions";
  return [leg2, leg4];
}

//https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e/train/javascript
const squaresOnly = arr => arr.filter(num => Number.isInteger(Math.sqrt(num)));

//https://www.codewars.com/kata/56ff9b53140fcca90b000530/train/javascript
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
    this.legs = 4;
  }
}

//https://www.codewars.com/kata/596e4ef7b61e25981200009f/solutions/javascript
function aspectRatio(x, y) {
  return [Math.ceil(y * 16 / 9), y];
}

//https://www.codewars.com/kata/52a47dd7e950edabfa000391/train/javascript
function getMax1() {
  var max =
  {
    name: 'Max Headroom'
  };
  return max;
}

function getMax2() {
  return {
    name: 'Max Headroom'
  };
}

//https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/train/javascript
Array.prototype.filter = function (func) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) arr.push(this[i]);
  }
  return arr;
};

//https://www.codewars.com/kata/59f9796cffe75f9299000025/train/javascript
const a = '0';

//https://www.codewars.com/kata/56606694ec01347ce800001b/solutions/javascript
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

//https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript
function findSum(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
    i++;
  }
  return sum;
}