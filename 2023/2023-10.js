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
console.log(validCredit(4003600000000014)); //VISA
console.log(validCredit(5555555555554444)); //MCARD
console.log(validCredit(4012888888881881)); //VISA
console.log(validCredit(2223016768739313)); //MCARD
console.log(validCredit(371449635398431)); //AMEX
console.log(validCredit(371449635398432)); //INVALID