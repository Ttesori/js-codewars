// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

const reverseStr = str => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseStr("hello") === "olleh");
console.log(reverseStr("Hello World") === "dlroW olleH");
console.log(reverseStr("") === "");
console.log(reverseStr(" ") === " ");
console.log(reverseStr("12345") === "54321");