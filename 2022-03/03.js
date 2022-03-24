//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/solutions/javascript
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw 'Error';
  return (candidate.minSalary * .9) <= job.maxSalary;
}

//https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript
function mystery() {
  var results =
    { sanity: 'Hello' };
  return results;
}

//https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

//https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
const find = (arr, el) => arr.indexOf(el) === -1 ? "Not found" : arr.indexOf(el);

//https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
const anyArrows = (arrows) => arrows.some(arrow => !arrow.hasOwnProperty('damaged') || !arrow.damaged);

//https://www.codewars.com/kata/562e98755e9214cd2500003d/train/javascript
function yourFutureCareer() {
  var career = Math.random();
  if (career <= 0.32) {
    return 'FrontEnd Developer';
  } else if (career <= 0.65) {
    return 'BackEnd Developer';
  } else {
    return 'Full-Stack Developer';
  }
}
yourFutureCareer();

//https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
function fiveLine(s) {
  s = s.trim();
  let str = '';
  for (let i = 1; i <= 5; i++) {
    str += s.repeat(i);
    if (i !== 5) str += '\n';
  }
  return str;
}

//https://www.codewars.com/kata/56214b6864fe8813f1000019/train/javascript
var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

//https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript
const ArrowFunc = (arr) => arr.map(num => String.fromCharCode(num)).join('');

//https://www.codewars.com/kata/54598e89cbae2ac001001135/train/javascript
function any(arr, fun) {
  return arr.some(el => fun(el));
}

//https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0/train/javascript
function circleArea(circle) {
  return Math.pow(circle.radius, 2) * Math.PI;
}

//https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) throw 'No more lives';
    if (n === this.number) return true;
    this.lives--;
    return false;
  }
}

//https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
function roundIt(n) {
  let digits = String(n).split('.');
  if (digits[0].length > digits[1].length) {
    return Math.floor(n);
  } else if (digits[1].length > digits[0].length) {
    return Math.ceil(n);
  } else {
    return Math.round(n);
  }
}

//https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript
function isToday(date) {
  const today = new Date();
  return date.getMonth() === today.getMonth() && date.getDate() === today.getDate() && date.getFullYear() === today.getFullYear();
}
//https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript
function isToday(date) {
  return newDate().toDateString() === date.toDateString();
}

//https://www.codewars.com/kata/521cd52e790405a74800032c/train/javascript
function wrap(value) {
  return {
    "value": value
  };
}

//https://www.codewars.com/kata/56d8ae9237123036d3001b54/train/javascript
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
};