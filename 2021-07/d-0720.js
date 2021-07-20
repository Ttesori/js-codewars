// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const convertToParen = (str) => {
  // Could do it in one line, but switched to 2 to reduce redundancy
  str = str.toLowerCase();
  return str.split('').map(char => str.indexOf(char) === str.lastIndexOf(char) ? '(' : ')').join('');
}

console.log(convertToParen("din") === "(((")
console.log(convertToParen("recede") === "()()()")
console.log(convertToParen("Success") === ")())())")
console.log(convertToParen("(( @") === "))((")
console.log(convertToParen('RPPPSGPPTPkFPPPwPPQ') === '()))(())()(()))())(');