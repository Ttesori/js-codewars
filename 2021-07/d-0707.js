//Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numArr) {
  return numArr.reduce((sum, num) => sum + (num * num), 0);
}

console.log(squareSum([1, 2, 2]), 9);
console.log(squareSum([0, 2, 4]), 20);