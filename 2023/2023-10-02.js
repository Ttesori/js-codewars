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
