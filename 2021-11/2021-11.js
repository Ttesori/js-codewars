//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
function yearDays(year) {
  const days = year % 100 === 0 && year % 400 === 0 ? 366 : year % 4 === 0 && year % 100 !== 0 ? 366 : 365;
  return `${year} has ${days} days`;
}

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
  return str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

//https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
function ensureQuestion(s) {
  return s[s.length - 1] === '?' ? s : s + '?';
}

//https://www.codewars.com/kata/511f0fe64ae8683297000001/train/javascript
websites.push('codewars');

//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(string) {
  return string.length > 0 ? string.split(' ').map(word => 'sex').join(' ') : '';
}

//https://www.codewars.com/kata/55a14aa4817efe41c20000bc/train/javascript
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

//https://www.codewars.com/kata/56a29b237e9e997ff2000048/train/javascript
var rooms = {
  room1: {
    name: 'room 1',
    desc: 'desc 1',
    completed: false
  },
  room2: {
    name: 'room 2',
    desc: 'desc 2',
    completed: false
  },
  room3: {
    name: 'room 3',
    desc: 'desc 3',
    completed: false
  }
}

//https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
function datingRange(age) {
  return age >= 14 ? `${Math.floor((age / 2) + 7)}-${Math.floor((age - 7) * 2)}` : `${Math.floor(age - .10 * age)}-${Math.floor(age + .10 * age)}`;
}

//https://www.codewars.com/kata/55c933c115a8c426ac000082/train/javascript
function evalObject(value) {
  switch (value.operation) {
    case '+': return value.a + value.b;
    case '-': return value.a - value.b;
    case '/': return value.a / value.b;
    case '*': return value.a * value.b;
    case '%': return value.a % value.b;
    case '^': return Math.pow(value.a, value.b);
  }
}

//https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg
  }
}

//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
function grader(score) {
  return score > 1 ? "F" : score >= .9 ? 'A' : score >= .8 ? "B" : score >= .7 ? "C" : score >= .6 ? "D" : "F";
}

//https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

//https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba/train/javascript
function typeOfSum(a, b) {
  return typeof (a + b);
}

//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
function billboard(name, price = 30) {
  return name.split('').reduce((sum, l) => sum + price, 0);
}