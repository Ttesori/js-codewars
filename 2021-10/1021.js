// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
function whatday(num) {
  const days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  }
  return num in days ? days[num] : 'Wrong, please enter a number between 1 and 7'
}

// https://www.codewars.com/kata/55d277882e139d0b6000005d
const findAverage = function (nums) {
  return nums.reduce((count, num) => count + num) / nums.length
}

// https://www.codewars.com/kata/567bf4f7ee34510f69000032
String.prototype.digit = function () {
  return /^\d$/g.test(this)
};

// https://www.codewars.com/kata/57e1e61ba396b3727c000251
function stringClean(s) {
  return s.replace(/\d/g, '');
}

// https://www.codewars.com/kata/559d2284b5bb6799e9000047
function addLength(str) {
  return str.split(' ').map(el => el + ' ' + el.length)
}