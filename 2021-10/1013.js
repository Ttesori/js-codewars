// https://www.codewars.com/kata/5808e2006b65bff35500008f
function position(letter) {
  return 'Position of alphabet: ' + ('abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1);
}

// https://www.codewars.com/kata/57a5015d72292ddeb8000b31
function isPalindrome(line) {
  return line.toString() === line.toString().split('').reverse().join('');
}

// https://www.codewars.com/kata/565f5825379664a26b00007c
function getSize(width, height, depth) {
  return [(2 * (width * depth)) + (2 * (height * depth)) + (2 * (height * width)), width * height * depth]
}

// https://www.codewars.com/kata/55cb854deb36f11f130000e1
function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  if (c <= 0) return (c + " is freezing temperature")
  return (c + " is above freezing temperature")
}

function convertToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

// https://www.codewars.com/kata/523b623152af8a30c6000027
const square = x => x * x;