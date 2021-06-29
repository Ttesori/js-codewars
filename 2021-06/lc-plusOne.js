// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer. The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit. You may assume the integer does not contain any leading zero, except the number 0 itself.

const plusOne = (digits) => {
  // create number from array, account for large numbers
  let num = BigInt(digits.join('')) + BigInt(1);
  // return mapped array with each being a number
  return num.toString().split('').map(num => Number(num));
};

console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
console.log(plusOne([0]), [1]);