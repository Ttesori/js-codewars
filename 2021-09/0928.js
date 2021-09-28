// https://www.codewars.com/kata/570a6a46455d08ff8d001002
function noBoringZeros(n) {
  if (n === 0) return n;
  while (n % 10 === 0) {
    n = n / 10;
  }
  return n;
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
function nthEven(n) {
  return (n * 2) - 2;
}

// https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x) {
  const good = x.filter(good => good === 'good');
  if (good.length > 2) return 'I smell a series!';
  if (good.length >= 1) return 'Publish!';
  return 'Fail!';
}

// https://www.codewars.com/kata/55192f4ecd82ff826900089e
function divide(weight) {
  return weight > 2 && weight % 2 === 0;
}

// https://www.codewars.com/kata/5a3dd29055519e23ec000074
function checkExam(array1, array2) {
  const score = array2.reduce((count, char, i) => {
    if (char.length === 0) return count;
    if (char === array1[i]) {
      return count + 4;
    }
    return count - 1;
  }, 0);
  return score > 0 ? score : 0;
}