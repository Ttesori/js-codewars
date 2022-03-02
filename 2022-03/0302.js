//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
  const flat = [].concat(...arr);
  flat.sort((a, b) => b - a);
  return flat.join('>');
}