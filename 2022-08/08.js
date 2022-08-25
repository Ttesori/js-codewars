//https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
function removeRotten(bagOfFruits) {
  return bagOfFruits ? bagOfFruits.map(fruit => fruit.split('rotten').reverse()[0].toLowerCase()) : [];
}

//https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

//https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
function arrayLeaders(numbers) {
  return numbers.filter((num, i) => num > numbers.slice(i + 1).reduce((sum, n) => sum + n, 0));
}