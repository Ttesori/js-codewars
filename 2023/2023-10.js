//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
function rowSumOddNumbers(n) {
  let startingNum = (n * (n - 1)) + 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += startingNum;
    startingNum += 2;
  }
  return sum;
}

//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
const gimme = inputArray => inputArray.indexOf([...inputArray].sort((a, b) => a - b)[1]);

//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
const filterString = str => Number.parseInt(str.match(/\d/g).join(''));

//https://cs50.harvard.edu/x/2023/psets/1/mario/less/
function mario(height) {
  if (height < 1 || height > 8) return 'You must enter a value between 1 and 8';
  for (let i = 0; i < height; i++) {
    let spaces = height - i;
    let hashes = height - spaces + 1;
    console.log(' '.repeat(spaces) + '#'.repeat(hashes));
  }
}
// tests
// mario(8);
// mario(4);
// mario(2);
// mario(-1);

// https://cs50.harvard.edu/x/2023/psets/1/mario/more/
function marioMore(height) {
  if (height < 1 || height > 8) return 'You must enter a value between 1 and 8';

  for (let i = 0; i < height; i++) {
    let spaces = height - i;
    let hashes = height - spaces + 1;
    let output = ' '.repeat(spaces) + '#'.repeat(hashes) + ' ';
    output += '#'.repeat(hashes) + ' '.repeat(spaces);
    console.log(output);
  }
}
// tests
// marioMore(8);
// marioMore(4);

// https://cs50.harvard.edu/x/2023/psets/1/cash/
function getCoins(cents) {
  if (cents > 99 || cents < 0) return 'Cents must be between 1 and 99';
  let coins = 0;
  // Get quarters
  if (cents >= 25) {
    coins = Math.floor(cents / 25);
    cents = cents % 25;
  }
  // get dimes
  if (cents >= 10) {
    coins += Math.floor(cents / 10);
    cents = cents % 10;
  }
  // get nickels
  if (cents >= 5) {
    coins += Math.floor(cents / 5);
    cents = cents % 5;
  }
  // rest is pennies
  coins += cents;
  console.log(coins);
}

// Tests
// getCoins(4); //4
// getCoins(24); //6
// getCoins(25); //1
// getCoins(26); //2
// getCoins(99); //9
// getCoins(1); //1

//https://cs50.harvard.edu/x/2023/psets/1/credit/

function validCredit(number) {
  let numberStr = number.toString();
  // Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.
  let numberArr = numberStr.split('');
  let prodTotal = 0;
  for (let i = numberArr.length - 2; i >= 0; i -= 2) {
    let prod = parseInt(numberArr[i]) * 2;
    if (prod >= 10) {
      let proArr = prod.toString().split('');
      prodTotal += parseInt(proArr[0]) + parseInt(proArr[1]);
    } else {
      prodTotal += prod;
    }
    //console.log(prodTotal);
  }
  for (let i = numberArr.length - 1; i >= 0; i -= 2) {
    prodTotal += parseInt(numberArr[i]);
  }
  //console.log(prodTotal);

  // Add the sum to the sum of the digits that weren’t multiplied by 2.
  // If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!
  let result = (prodTotal % 10 === 0);
  if (!result) return 'INVALID';
  if (numberStr[0] === '3') return 'AMEX';
  if (numberStr[0] === '2' || numberStr[0] === '5') return 'MASTERCARD';
  if (numberStr[0] === '4' || numberStr[0] === '5') return 'VISA';
}

//Tests
// console.log(validCredit(4003600000000014)); //VISA
// console.log(validCredit(5555555555554444)); //MCARD
// console.log(validCredit(4012888888881881)); //VISA
// console.log(validCredit(2223016768739313)); //MCARD
// console.log(validCredit(371449635398431)); //AMEX
// console.log(validCredit(371449635398432)); //INVALID

//https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
function sortMyString(S) {
  let result = [[], []];
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0 || i === 0) {
      result[0].push(S[i]);
    } else {
      result[1].push(S[i]);
    }
  }
  return `${result[0].join('')} ${result[1].join('')}`;
}

// tests
// sortMyString("CodeWars"); //CdWr oeas
// sortMyString("YCOLUE'VREER"); //YOU'RE CLEVER

// https://cs50.harvard.edu/x/2023/labs/2/
let SCORES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
function compute_score(str) {
  str = str.match(/[\w]/g);
  return str.reduce((sum, letter) => sum + SCORES[letter.toUpperCase()], 0);
}

function scrabble(p1, p2) {
  let p1Score = compute_score(p1);
  let p2Score = compute_score(p2);
  return p1Score > p2Score ? 'Player 1 wins!' : p2Score > p1Score ? 'Player 2 Wins!' : 'Tie!';
};
// Tests
// console.log(scrabble('Question?', 'Question!')); //Tie!
// console.log(scrabble('Oh,', 'hai!')); //Player 2 wins!
// console.log(scrabble('COMPUTER', 'science')); //Player 1 wins!
// console.log(scrabble('Scrabble', 'wiNNeR')); //Player 1 wins!

function count_letters(str) {
  return str.match(/[a-zA-Z]/g).length;
}

function count_words(str) {
  return str.split(' ').length;
}

function count_sentences(str) {
  return str.match(/[.?!]/g).length;
}

function readability(str) {
  let words = count_words(str);
  let avgLetters = (count_letters(str) / words) * 100;
  let avgSentences = (count_sentences(str) / words) * 100;
  let index = Math.round(.0588 * avgLetters - .296 * avgSentences - 15.8);
  if (index < 1) {
    return 'Before Grade 1';
  }
  if (index >= 16) {
    return 'Grade 16+';
  }
  return `Grade ${index}`;
}

// Tests
console.log(readability('One fish. Two fish. Red fish. Blue fish.')); // Before grade 1
console.log(readability('Would you like them here or there? I would not like them here or there. I would not like them anywhere.')); // 2
console.log(readability("Congratulations! Today is your day. You're off to Great Places! You're off and away!")); // 3
console.log(readability('Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.')); // 5
console.log(readability('A large class of computational problems involve the determination of properties of graphs, digraphs, integers, arrays of integers, finite families of finite sets, boolean formulas and elements of other countable domains.')); // 16+
