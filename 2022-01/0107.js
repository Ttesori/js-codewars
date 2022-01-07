// https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    years++;
    const add = principal * interest;
    principal += add - (add * tax)
  }
  return years;
}