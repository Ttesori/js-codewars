// https://www.codewars.com/kata/5977618080ef220766000022/train/javascript
function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + ' Chinese Yuan';
}

// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
function getNumberFromString(s) {
  return Number(s.match(/(\d+)/g).join(''));
}