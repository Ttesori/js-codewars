// Compare within margin: Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

function closeCompare(a, b, margin = 0) {
  if (margin >= Math.max(b, a) - Math.min(b, a)) return 0;
  return a < b ? -1 : 1;
}

console.log(closeCompare(4, 5) === -1)
console.log(closeCompare(5, 5) === 0)
console.log(closeCompare(6, 5) === 1)
console.log(closeCompare(-6, -5) === -1)