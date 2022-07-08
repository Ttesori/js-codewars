function sevenAte9(str) {
  return str.replace(/797/g, '77').replace(/797/g, '77');
}

https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript
function add(n) {
  return function (num) {
    return n + num;
  };
}

https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
function calc(x) {
  let total1 = '';
  x.toString().split('').forEach((char, i) => total1 += x.charCodeAt(i));
  let total2 = total1.match(/7/g);
  return total2?.length ? total2.length * 6 : 0;
}

//https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i + 1] - ar[i] === 1 || ar[i] - ar[i + 1] === 1) count++;
  }
  return count;
};

//https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
function multiplyAll(arr) {
  return function (num) {
    return arr.map(el => el * num);
  };
}