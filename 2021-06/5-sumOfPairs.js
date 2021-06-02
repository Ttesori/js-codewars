// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum. Negative numbers and duplicate numbers can and will appear. NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

const sumPairs = (ints, sum) => {
  let lastNumber;
  for (let i = 0; i < ints.length; i++) {
    if (lastNumber && lastNumber === ints[i]) { continue; }
    lastNumber = ints[i];

    const sliced = ints.slice(0, i);
    const sumIndex = sliced.indexOf(sum - ints[i]);

    if (sumIndex !== -1) {
      return [sliced[sumIndex], ints[i]];
    }
  }
}

// Tests
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
console.log(sumPairs([20, -13, 40], -7), undefined);
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4]);
console.log(sumPairs([0, 2, 0], 0), [0, 0]);
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3]);