//https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
function maxTriSum(numbers) {
  let nums = new Set(numbers);
  let nums2 = Array.from(nums);
  nums2.sort((a, b) => b - a);
  return nums2.slice(0, 3).reduce((sum, num) => sum + num, 0);
}

//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
function outed(meet, boss) {
  let total = 0;
  let people = 0;
  for (let person in meet) {
    if (person === boss) {
      total += meet[person] * 2;
    } else {
      total += meet[person];
    }
    people++;
  }
  let avg = total / people;
  return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
function tidyNumber(n) {
  return n === Number(n.toString().split('').sort((a, b) => Number(a) - Number(b)).join(''));
}

//https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
function maxProduct(numbers, size) {
  return numbers.sort((a, b) => b - a).slice(0, size).reduce((prod, num) => prod * num, 1);
}