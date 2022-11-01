//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
function yearDays(year) {
  const days = year % 100 === 0 && year % 400 === 0 ? 366 : year % 4 === 0 && year % 100 !== 0 ? 366 : 365;
  return `${year} has ${days} days`;
}