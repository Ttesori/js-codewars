//https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    return this.draft - (this.crew * 1.5) > 20;
  }
}

//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj) {
  const arr = [];
  for (let key in obj) {
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}

//https://www.codewars.com/kata/57280481e8118511f7000ffa/solutions/javascript
function splitAndMerge(str, separator) {
  return str.split(' ').map(word => word.split('').join(separator)).join(' ');
}

//https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript
const describeAge = (age) => `You're a(n) ${age <= 12 ? 'kid' : age >= 13 && age <= 17 ? 'teenager' : age <= 64 ? 'adult' : 'elderly'}`;

//https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript
function whoseMove(lastPlayer, win) {
  return lastPlayer === 'white' ? (win ? 'white' : 'black') : (win ? 'black' : 'white');
}

//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
function billboard(name, price = 30) {
  return name.split('').reduce((sum, l) => sum + price, 0);
}

//https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba/train/javascript
function typeOfSum(a, b) {
  return typeof (a + b);
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

//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
function grader(score) {
  return score > 1 ? "F" : score >= .9 ? 'A' : score >= .8 ? "B" : score >= .7 ? "C" : score >= .6 ? "D" : "F";
}

//https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg
  }
}



