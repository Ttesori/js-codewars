// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age]. The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(ages.length - 2, ages.length);

console.log(twoOldestAges([1, 2, 10, 8]), [8, 10]);
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]), [18, 83])