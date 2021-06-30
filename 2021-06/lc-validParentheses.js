// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.

const isValid = function (s) {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      // add openings to stack
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false; // If stack is empty, fail
      // if last added is matching open
      if (stack[stack.length - 1] === map[s[i]]) {
        // paren is valid, pop
        stack.pop();
      } else {
        // not valid, fail
        return false;
      }
    }
  }
  return (stack.length === 0);
};

console.log(isValid('()'), true);
console.log(isValid('()[]{}'), true);
console.log(isValid('(]'), false);
console.log(isValid('('), false);