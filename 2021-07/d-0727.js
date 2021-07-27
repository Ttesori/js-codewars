// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

const sortArray = (arr) => {
  const odds = arr.filter(num => Math.abs(num) % 2 === 1).sort((a, b) => a - b);
  console.log(odds);
  return arr.map(num => {
    if (Math.abs(num) % 2 === 1) {
      return odds.shift();
    } else {
      return num;
    }
  })
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);