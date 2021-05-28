// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
  while (parens.indexOf('()') !== -1) {
    parens = parens.replace('()', '');
  }
  if (parens.length === 0) return true;
  return false;
}

// Tests
console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
console.log(validParentheses("())(()"), false);
