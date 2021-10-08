// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
function distinct(a) {
  return Array.from(new Set(a));
}

// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
function dutyFree(normPrice, discount, hol) {
  let discountPrice = normPrice * (1 - (discount * .01));
  return Math.floor(hol / (normPrice - discountPrice));
}

// https://www.codewars.com/kata/59fca81a5712f9fa4700159a
function toBinary(n) {
  return Number(n.toString(2));
}

// https://www.codewars.com/kata/56f695399400f5d9ef000af5
function correctTail(body, tail) {
  return body[body.length - 1] === tail;
}

// https://www.codewars.com/kata/56b29582461215098d00000f
function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}