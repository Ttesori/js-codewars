// https://www.codewars.com/kata/577bd026df78c19bca0002c0
function correct(string) {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

// https://www.codewars.com/kata/55edaba99da3a9c84000003b
function divisibleBy(numbers, divisor) {
  return numbers.filter(el => el % divisor === 0);
}

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return 'F';
  if (avg < 70) return 'D';
  if (avg < 80) return 'C';
  if (avg < 90) return 'B';
  return 'A';
}

// https://www.codewars.com/kata/568d0dd208ee69389d000016
function rentalCarCost(d) {
  if (d < 3) return d * 40;
  if (d < 7) return (d * 40) - 20;
  return (d * 40) - 50;
}

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
function removeEveryOther(arr) {
  return arr.filter((item, i) => i % 2 === 0)
}
