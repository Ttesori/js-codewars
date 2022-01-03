// https://www.codewars.com/kata/56a25ba95df27b7743000016
function validateCode(code) {
  let reg = new RegExp('^[1,2,3]')
  return reg.test(code);
}