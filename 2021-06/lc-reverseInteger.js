//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

const reverse = (x) => {
  let xRev = Number(String(Math.abs(x)).split('').reverse().join(''));
  if (xRev > 2147483648) return 0;
  return x < 0 ? -1 * xRev : xRev;
};

console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(120), 21);