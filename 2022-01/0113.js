// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript
function isVow(a) {
  const vowels = [97, 101, 105, 111, 117];
  return a.map(code => vowels.includes(code) ? String.fromCharCode(code) : code)
}