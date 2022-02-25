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

