//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements. gimme([2, 3, 1]) => 0

const findMiddleEl = arr => arr.indexOf([...arr].sort((a, b) => a - b)[1]);

console.log(findMiddleEl([2, 3, 1]), 0);
console.log(findMiddleEl([5, 10, 14]), 1);
console.log(findMiddleEl([27, -8, 13]), 2);