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