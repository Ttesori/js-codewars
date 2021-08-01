//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  const nums = [...numbers];
  const low = [...numbers].sort((a, b) => a - b)[0];
  const index = numbers.indexOf(low);
  nums.splice(index, 1);
  return nums;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5])
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4])
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1])