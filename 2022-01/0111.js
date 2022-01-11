// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
function cookie(x) {
  let who = 'the dog';
  if (typeof x === 'string') {
    who = 'Zach'
  }
  if (typeof x === 'number') {
    who = 'Monica'
  }
  return `Who ate the last cookie? It was ${who}!`;
}

// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
var cubeChecker = function (volume, side) {
  if (volume < side || volume <= 0 || side <= 0) return false;
  return volume === (Math.pow(side, 3));
};