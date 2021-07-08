// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

function solve(arr) {
  // the answer is the number of unique elements in each array multiplied together
  return arr.map(arr => [...new Set(arr)].length).reduce((count, num) => count * num, 1);
}

console.log(solve([[1, 2], [4], [5, 6]]), 4); // 2 * 1 * 2 => 4
console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4); // 2 * 1 * 2 => 4
console.log(solve([[1, 2], [3, 4], [5, 6]]), 8); // 2 * 2 * 2 => 8
console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72); // 3 * 4 * 6 => 72