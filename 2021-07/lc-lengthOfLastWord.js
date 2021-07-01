// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

var lengthOfLastWord = function (s) {
  const words = s.trim().split(' ');
  if (words.length === 0) return 0;
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'), 5);
console.log(lengthOfLastWord(' '), 0);
console.log(lengthOfLastWord('a '), 1);
