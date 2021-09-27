// https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i))
  }
  return arr;
}

// https://www.codewars.com/kata/588417e576933b0ec9000045
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

// https://www.codewars.com/kata/57f6ad55cca6e045d2000627
function squareOrSquareRoot(array) {
  return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num);
}

// https://www.codewars.com/kata/5966e33c4e686b508700002d
function sumStr(a, b) {
  return String(Number(a) + Number(b))
}

// https://www.codewars.com/kata/55c28f7304e3eaebef0000da
function createArray(number) {
  var newArray = [];
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}