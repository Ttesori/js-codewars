//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
  if (n > 12 || n < 0) throw new RangeError('');
  return n === 0 ? 1 : n * factorial(n - 1);
}

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

//https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
const sumDigits = (number) => Math.abs(number).toString().split('').reduce((sum, num) => sum + Number(num), 0);

//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
  return str.match(/[a-z]/g).reverse().join('');
}

//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit) {
  return a.every(num => num <= limit);
}

//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a - b).join(''));
}

//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url) {
  return url.split('#')[0];
}


//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s) {
  const count = s.split('').reduce((res, char) => char === char.toUpperCase() ? [res[0], res[1] + 1] : [res[0] + 1, res[1]], [0, 0]);
  if (count[0] > count[1]) {
    return s.toLowerCase();
  } else if (count[0] < count[1]) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
function inAscOrder(arr) {
  return arr.toString() === arr.sort((a, b) => a - b).toString();
}

//https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript
var hotpo = function (n) {
  let count = 0;
  while (n !== 1) {
    count++;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
  }
  return count;
};

//https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript
const quadratic = (x1, x2) => [1, -x1 + -x2, -x1 * -x2];

//https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript
function barTriang(p1, p2, p3) {
  return [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4), +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)];
}

//https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
const countSquares = cuts => (cuts ? 6 * cuts ** 2 + 2 : 1);

//https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript
const symmetricPoint = ([x1, y1], [x2, y2]) => [x2 * 2 - x1, y2 * 2 - y1];

//https://www.codewars.com/kata/56c5847f27be2c3db20009c3/solutions/javascript
const list = ["#", "kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple", "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape", "cherry", "pear", "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "orange", "apple", "orange", "grape", "orange", "grape", "cherry", "pear", "cherry", "pear", "apple", "pear", "kiwi", "banana", "kiwi", "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber", "orange", "cucumber", "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry", "pear", "kiwi", "pear", "kiwi", "banana", "apple", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "pineapple", "cucumber", "apple", "grape", "orange", "grape", "cherry", "grape", "cherry", "pear", "cherry", "apple", "kiwi", "banana", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple"];

function SubtractSum(n) {
  let sum = n.toString().split('').reduce((count, num) => Number(num) + count, 0);
  n = n - sum;
  while (n > 100) {
    let sum = n.toString().split('').reduce((count, num) => Number(num) + count, 0);
    n = n - sum;
  }
  return list[n];
}

//https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript
function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) return false;
  if (formula.includes(3) && formula.includes(4)) return false;
  if (formula.includes(5) && !formula.includes(6)) return false;
  if (formula.includes(6) && !formula.includes(5)) return false;
  if (!formula.includes(7) && !formula.includes(8)) return false;
  return true;
}

//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
function circleCircumference(circle) {
  return (2 * Math.PI * circle.radius);
}

//https://www.codewars.com/kata/59fc72fe235f93838b002235/train/javascript
function power(x, y) {
  if (x === 1) return 1;
  if (x === 0 && y === 0) return 1;
  return x ** y;
}

//https://www.codewars.com/kata/56be025f9347a066c7000e4f/train/javascript
Math.roundTo = function (number, precision) {
  return +number.toFixed(precision);
};

//https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
function eachCons(array, n) {
  let list = [];
  if (n > array.length) return list;

  for (let i = 0; i < array.length; i++) {
    list.push(array.slice(i, i + n));
    if (array[i + n] === undefined) break;
  }
  return list;
}

//https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/javascript
class Cube {
  constructor(n = 0) {
    this.side = Math.abs(n);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

//https://www.codewars.com/kata/5612a42e746aa62de100001a/train/javascript
const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12);

//https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript
function magNumber(info) {
  const weapons = {
    "PT92": 17,
    "M4A1": 30,
    "M16A2": 30,
    "PSG1": 5
  };
  return Math.ceil((info[1] * 3) / (weapons[info[0]]));
}

//https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript
var greet_abe = function () {
  var name = 'Abe';
  return "Hello, " + name + '!';
};

var greet_ben = function () {
  var name = 'Ben';
  return "Hello, " + name + '!';
};

//https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript
function amIWilson(p) {
  return Number.isInteger((factorial(p - 1) + 1) / (p * p));
}

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

//https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript
function arr2bin(arr) {
  const sum = arr.reduce((sum, num) => !isNaN(parseInt(num)) ? sum + num : sum, 0);
  return sum.toString(2);
}

//https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript
function arr2bin(arr) {
  const sum = arr.reduce((sum, num) => typeof num === 'number' ? sum + num : sum, 0);
  return sum.toString(2);
}

//https://www.codewars.com/kata/55a13556ca4a6d0ab4000003/train/javascript
var Person = function () {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      f.forEach(friend => this._friends.push(friend));
    }
  };
  return person;
};

//https://www.codewars.com/kata/5b609ebc8f47bd595e000627/train/javascript
function solution([m1, m2, d], [um1, um2, ud]) {
  const G = 6.67e-11;
  const conversion = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: .453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: .3048
  };
  return G * m1 * conversion[um1] * m2 * conversion[um2] / (d * conversion[ud]) ** 2;
}

//https://www.codewars.com/kata/57080f21d531cd94950007eb/train/javascript
// console.log(blackBox.toString());
JSopenSesame();

//https://www.codewars.com/kata/55e4c52ad58df7509c00007e/train/javascript
function validate(username, password) {
  var database = new Database();
  if (password.includes('//') || password.includes('||')) password = false;
  return database.login(username, password);
}

//https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript
function changeMe(moneyIn) {
  switch (moneyIn) {
    case '£5': return '20p '.repeat(25).trim();
    case '£2': return '20p '.repeat(10).trim();
    case '£1': return '20p '.repeat(5).trim();
    case '50p': return '20p 20p 10p';
    case '20p': return '10p 10p';
    default: return moneyIn;
  }
}

//https://www.codewars.com/kata/56e6a330715e7221d9000a3b/train/javascript
Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
};

//https://www.codewars.com/kata/5786f8404c4709148f0006bf/train/javascript
function startingMark(bodyHeight) {
  const a = { x: 1.52, y: 9.45 };
  const b = { x: 1.83, y: 10.67 };
  const m = (b.y - a.y) / (b.x - a.x);
  return Math.round((m * bodyHeight + b.y - m * b.x) * 100) / 100;
}

//https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript
function howMuchWater(water, load, clothes) {
  return clothes > (load * 2) ? 'Too much clothes' : clothes < load ? 'Not enough clothes' : +(water * 1.1 ** (clothes - load)).toFixed(2);
}

//https://www.codewars.com/kata/57078c56924f34f763000b3f/solutions/javascript
class Circular {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
}
circular = new Circular();

//https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/train/javascript
const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const R = 0.082;
  const T = temp + 273.15;
  return (((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * R * T) / volume;
};

//https://www.codewars.com/kata/5692a582cc22387ccf000017/train/javascript
const configuration = {
  "name": "your-pack-name",
  "version": "1.0.0"
};

//https://www.codewars.com/kata/572269697297444c570008b9/train/javascript
const greaterThanLessThan = (a, b, c) => a < b < c;

//https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
function capitalize(s) {
  return [s.split('').map((char, i) => i % 2 === 1 ? char.toLowerCase() : char.toUpperCase()).join(''), s.split('').map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('')];
};

//https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
function removeDuplicateWords(s) {
  return Array.from(new Set(s.split(' '))).join(' ');
}

//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  a1.sort((a, b) => a.length - b.length);
  a2.sort((a, b) => b.length - a.length);
  const one = Math.abs(a1[0].length - a2[0].length);
  const two = Math.abs(a1[a1.length - 1].length - a2[a2.length - 1].length);
  return one > two ? one : two;
}

//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/javascript
function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = attacker.name === fighter1.name ? fighter2 : fighter1;
  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health = defender.health - attacker.damagePerAttack;
    let dead = defender.health <= 0 ? `and is dead. ${attacker.name} wins.` : '';
    console.log(`${attacker.name} attacks ${defender.name}; ${defender.name} now has ${defender.health}${dead}.`);
    if (dead) return attacker.name;
    let temp = attacker;
    attacker = defender;
    defender = temp;
  }
}

// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
function maxMultiple(divisor, bound) {
  return (Math.floor(bound / divisor) * divisor);
}

//https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
function solution(digits) {
  let arr = digits.split('');
  let max = 0;
  for (let i = 0; i < arr.length - 4; i++) {
    let num = Number(digits.slice(i, i + 5));
    max = num > max ? num : max;
  }
  return max;
}

//https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}

//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
function sumOfMinimums(arr) {
  return arr.reduce((sum, nums) => sum + Math.min(...nums), 0);
}

//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
function rowWeights(array) {
  return [array.filter((p, i) => i % 2 === 0).reduce((sum, w) => sum + w, 0), array.filter((p, i) => i % 2 !== 0).reduce((sum, w) => sum + w, 0)];
}

//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}