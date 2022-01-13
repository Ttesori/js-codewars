// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript
function isVow(a) {
  const vowels = [97, 101, 105, 111, 117];
  return a.map(code => vowels.includes(code) ? String.fromCharCode(code) : code)
}

// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
function odds(values) {
  return values.filter(num => num % 2 === 1);
}