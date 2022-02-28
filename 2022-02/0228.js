//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
  const min = Math.min(...arr.map(word => word.length));
  return arr.map(word => word.slice(0, min));
}

//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
function howManySmaller(arr, n) {
  arr = arr.map(num => +num.toFixed(2));
  return arr.filter(num => num < n).length;
}

//https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript
function periodIsLate(last, today, cycleLength) {
  return ((today.getTime() - last.getTime()) / 86400000) > cycleLength;
}
