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