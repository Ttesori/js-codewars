// https://www.codewars.com/kata/580a094553bd9ec5d800007d
function apple(x) {
  return x * x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

// https://www.codewars.com/kata/53f0f358b9cb376eca001079
const Ball = function (ballType) {
  this.ballType = ballType || "regular"
};

// https://www.codewars.com/kata/55eea63119278d571d00006a
function nextId(ids) {
  ids.sort((a, b) => a - b);
  if (ids[0] !== 0) return 0;
  for (let i = 0; i < ids.length; i++) {
    if (ids.indexOf(i + 1) === -1) return i + 1;
  }
  return ids[ids.length - 1] + 1;
}

// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
function validateUsr(username) {
  res = /^([a-z]|\d|_){4,16}$/.test(username)
  return res
}

// https://www.codewars.com/kata/545afd0761aa4c3055001386
function take(arr, n) {
  return arr.slice(0, n)
}