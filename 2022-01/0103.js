// https://www.codewars.com/kata/56a25ba95df27b7743000016
function validateCode(code) {
  let reg = new RegExp('^[1,2,3]')
  return reg.test(code);
}

// https://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}

// https://scrimba.com/learn/frontend/solution-case-insensitive-palindrome-cKKDPefP
function caseInsensitivePalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}