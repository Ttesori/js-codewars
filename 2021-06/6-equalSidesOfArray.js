// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = i === 0 ? 0 : arr.slice(0, i).reduce((count, num) => count + num);
    let right = i === arr.length - 1 ? 0 : arr.slice(i + 1).reduce((count, num) => count + num);
    if (left === right) return i;
  }
  return -1;
}

// Tests
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);