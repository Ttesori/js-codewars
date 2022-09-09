//https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
function maxTriSum(numbers) {
  let nums = new Set(numbers);
  let nums2 = Array.from(nums);
  nums2.sort((a, b) => b - a);
  return nums2.slice(0, 3).reduce((sum, num) => sum + num, 0);
}