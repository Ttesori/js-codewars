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

//https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
function datingRange(age) {
  return age >= 14 ? `${Math.floor((age / 2) + 7)}-${Math.floor((age - 7) * 2)}` : `${Math.floor(age - .10 * age)}-${Math.floor(age + .10 * age)}`;
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

//https://www.codewars.com/kata/55a14aa4817efe41c20000bc/train/javascript
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(string) {
  return string.length > 0 ? string.split(' ').map(word => 'sex').join(' ') : '';
}

//https://www.codewars.com/kata/511f0fe64ae8683297000001/train/javascript
websites.push('codewars');

//https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
function ensureQuestion(s) {
  return s[s.length - 1] === '?' ? s : s + '?';
}

//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
function aliasGen(fname, lname) {
  const check = new RegExp(/^[A-Za-z]/)
  return check.test(fname) && check.test(lname) ? `${firstName[fname[0].toUpperCase()]} ${surname[lname[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.';
}