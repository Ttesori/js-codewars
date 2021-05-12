// Eloquent JS Chapter 3 Exercises

// # Minimum
// Write a function min that takes two arguments and returns their minimum.
const min = (a, b) => {
  return a > b ? b : a;
}

//console.log(min(0, 10)); // 0
//console.log(min(0, -10)); // -10

// # Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd: Zero is even. One is odd. For any other number N, its evenness is the same as N - 2. Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

const isEven = (num) => {
  num = Math.abs(num);
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
}

//console.log(isEven(50)); // → true
//console.log(isEven(75)); // → false
//console.log(isEven(-1)); // → ??

// # Bean Counting
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
const countChar = (str, char) => {
  return str.split('').filter(oneChar => oneChar === char).length;
};

//console.log(countChar("BBC", 'B')); // 2
//console.log(countChar("kakkerlak", "k")); // 4