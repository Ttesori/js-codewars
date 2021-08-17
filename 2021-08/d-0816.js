// Given a phrase, reverse the order of the characters of each word.

const reverseWords = (str) => str.split(' ').map(word => {
  let revWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    revWord += word[i]
  }
  return revWord;
}).join(' ');

// Examples
console.log(reverseWords("I love JavaScript!") === "I evol !tpircSavaJ");
console.log(reverseWords("Hello World") === "olleH dlroW");