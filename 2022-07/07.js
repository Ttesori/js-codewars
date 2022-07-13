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

//https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript
function spacify(str) {
  return str.split('').join(' ');
}

//https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
function mygcd(x, y) {
  let lg = x > y ? y : x;
  for (let i = lg; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) return i;
  }
}

//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
String.prototype.camelCase = function () {
  let output = '';
  let input = this.trim().split(' ');
  if (input.length > 1) input.forEach(word => output += word[0].toUpperCase() + word.slice(1).toLowerCase());
  return output;
};