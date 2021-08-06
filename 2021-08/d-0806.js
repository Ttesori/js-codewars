// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array. 
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3

const averageLength = (arr) => {
  // find the average length
  const avg = Math.round(arr.reduce((sum, el) => sum + el.length, 0) / arr.length);
  // map the array to new element length and return
  return arr.map(el => el[0].repeat(avg));
}

console.log(averageLength(['u', 'y']), ['u', 'y']);
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);