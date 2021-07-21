// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number. Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

const iqTest = numbers => {
  const numArr = numbers.split(' ');
  const odd = numArr.filter(num => num % 2 === 1);
  const even = numArr.filter(num => num % 2 === 0);
  return odd.length === 1 ? numArr.indexOf(odd[0]) + 1 : numArr.indexOf(even[0]) + 1;
}

console.log(iqTest("2 4 7 8 10") === 3);
console.log(iqTest("1 2 2") === 1);
console.log(iqTest("2 4 6 8 33 10") === 5);