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

// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes('5')) {
      count++;
    }
  }
  return count;
}

// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
function stray(numbers) {
  const table = {};
  numbers.forEach((num) => {
    if (num in table) {
      table[num]++;
    } else {
      table[num] = 1;
    }
  });
  for (const num in table) {
    if (table[num] === 1) return Number(num);
  }
}