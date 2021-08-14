// Given an array of items, reverse the order.

const reverseOrder = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Examples
console.log(reverseOrder([1, 2, 3]), [3, 2, 1]);
console.log(reverseOrder(['a', 'b', 'c', 'd']), ['d', 'c', 'b', 'a']);