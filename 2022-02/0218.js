function toCsvText(array) {
  let output = '';
  array.forEach((el, i) => {
    output += el.join(',')
    if (array.length - 1 !== i) output += '\n';
  })
  return output;
}

// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
function isOpposite(s1, s2) {
  if (s1.length === 0 || s2.length === 0 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  return s1.split('').every((el, i) => el.toUpperCase() === el ? el.toLowerCase() === s2[i] : el.toUpperCase() === s2[i]);
}

// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
function uefaEuro2016(teams, scores) {
  let output = `At match ${teams[0]} - ${teams[1]}, `;
  if (scores[0] > scores[1]) {
    return output + `${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    return output + `${teams[1]} won!`;
  } else {
    return output + `teams played draw.`;
  }
}

//
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}

//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript 
function defineSuit(card) {
  const suits = {
    '♣': 'clubs',
    '♠': 'spades',
    '♦': 'diamonds',
    '♥': 'hearts'
  }
  return suits[card.slice(-1)]
}

//https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
function uniTotal(string) {
  return string.split('').reduce((count, char) => count += char.charCodeAt(0), 0);
}

// https://www.codewars.com/kata/570669d8cb7293a2d1001473/train/javascript
function ifChuckSaysSo() {
  return 1 === 0;
}

//https://www.codewars.com/kata/560ecf0cb040de130e00007d/train/javascript
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2
}



