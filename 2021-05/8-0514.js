// Codewars 8kyu Problems - 5/14/2021

// Array plus array
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((count, num) => count + num, 0) + arr2.reduce((count, num) => count + num, 0);
}

// Jenny's secret message
function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

// Reversed Words
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

//Do I get a bonus?
function bonusTime(salary, bonus) {
  return '£' + (bonus ? salary * 10 : salary);
}

// Is he gonna survive?
function hero(bullets, dragons) {
  return dragons * 2 <= bullets ? true : false;
}

// You only need one - Beginner
function check(a, x) {
  return a.indexOf(x) !== -1 ? true : false;
}

// Count the Monkeys!
function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// Reversed sequence
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// Calculate average
function find_average(array) {
  if (array.length === 0) return 0;
  return array.reduce((count, num) => count + num, 0) / array.length;
}

// Get the mean of an array
function getAverage(marks) {
  return Math.floor(marks.reduce((count, num) => count + num, 0) / marks.length);
}

// Total amount of points
function points(games) {
  return games.reduce((count, game) => {
    let x = Number(game[0]);
    let y = Number(game[2]);
    if (x > y) {
      return count + 3;
    }
    if (x === y) {
      return count + 1;
    }
    return count + 0;
  }, 0);
}

// Function 1 - hello world
const greet = () => 'hello world!';

// Sum without highest and lowest number
function sumArray(array) {
  if (array === null || array.length === 0) return 0;
  return array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((count, num) => count + num, 0);
}

// Fake Binary
function fakeBin(x) {
  return x.split('').map(num => num < 5 ? 0 : 1).join('')
}

// Beginner Series #2 Clock
function past(h, m, s) {
  return (s * 1000) + (m * 60000) + (h * 3600000);
}

//Convert a String to a Number!
const stringToNumber = function (str) {
  return Number(str);
}

// Invert values
function invert(array) {
  if (array.length === 0) return [];
  return array.map(num => -num);
}

// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let pos = input.filter(num => num > 0);
  let negs = input.filter(num => num < 0);
  let posCount = pos.length > 0 ? pos.length : 0;
  let negSum = negs.length > 0 ? negs.reduce((count, num) => count + num, 0) : 0;
  return [posCount, negSum];
}

// Beginner - Lost Without a Map
function maps(x) {
  return x.map(num => num * 2);
}

// A Needle in the Haystack
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
