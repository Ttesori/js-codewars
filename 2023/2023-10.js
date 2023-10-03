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
marioMore(8);
marioMore(4);