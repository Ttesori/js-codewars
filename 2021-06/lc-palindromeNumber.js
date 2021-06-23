// Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

const isPalindrome = (x) => {
  if (x < 0) return false;
  let xRev = String(x).split('').reverse().join('');
  return xRev === String(x);
};

console.log(isPalindrome(121), true);
console.log(isPalindrome(-121), false);
console.log(isPalindrome(10), false);
console.log(isPalindrome(121), true);