// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
  if (!array1 || !array2) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.every((el, i) => array2[i] === el * el);
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2) === true);
b1 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [12 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(b1, b2) === false);