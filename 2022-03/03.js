//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/solutions/javascript
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw 'Error';
  return (candidate.minSalary * .9) <= job.maxSalary;
}

//https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript
function mystery() {
  var results =
    { sanity: 'Hello' };
  return results;
}

//https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

//https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
const find = (arr, el) => arr.indexOf(el) === -1 ? "Not found" : arr.indexOf(el);

//https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
const anyArrows = (arrows) => arrows.some(arrow => !arrow.hasOwnProperty('damaged') || !arrow.damaged);