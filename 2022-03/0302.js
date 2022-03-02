//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
  const flat = [].concat(...arr);
  flat.sort((a, b) => b - a);
  return flat.join('>');
}

//https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
function sc(floors) {
  return floors <= 1 ? "" : 'Aa~ '.repeat(floors - 1) + (floors <= 6 ? 'Pa! Aa!' : 'Pa!');
}