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

//https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
function goodVsEvil(good, evil) {
  good = good.split(' ');
  evil = evil.split(' ');
  let goodVal = (good[0] * 1) + (good[1] * 2) + (good[2] * 3) + (good[3] * 3) + (good[4] * 4) + (good[5] * 10);
  let evilVal = (evil[0] * 1) + (evil[1] * 2) + (evil[2] * 2) + (evil[3] * 2) + (evil[4] * 3) + (evil[5] * 5) + (evil[6] * 10);
  return goodVal > evilVal ? 'Battle Result: Good triumphs over Evil' : goodVal === evilVal ? 'Battle Result: No victor on this battle field' : 'Battle Result: Evil eradicates all trace of Good';
}

//https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
function meeting(s) {
  let people = s.split(';');
  let peopleNames = people.map(person => `(${person.toUpperCase().split(':').reverse().join(', ')})`);
  peopleNames.sort();
  return peopleNames.join('');
}

//https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
function dataReverse(data) {
  let output = [];
  for (let i = 0; i < data.length; i += 8) {
    let seq = data.slice(i, i + 8);
    output.push(seq);
  }
  output.reverse();
  let smush = [];
  output.forEach(el => smush = [...smush, ...el]);
  return smush;
}

//https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
function divCon(x) {
  let totalInt = 0;
  let totalStr = 0;
  x.forEach(num => typeof num === 'string' ? totalStr += Number(num) : totalInt += num);
  return totalInt - totalStr;
}

//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript
function differenceOfSquares(n) {
  let sqSum = 0;
  let sumSq = 0;
  for (let i = 1; i <= n; i++) {
    sqSum += i;
    sumSq += i ** 2;
  }
  sqSum = sqSum ** 2;
  return sqSum - sumSq;
}

//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
function minSum(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.pop() * arr.shift());
  }
  return newArr.reduce((sum, num) => sum + num);
}

//https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript
function strong(n) {
  let nStr = n.toString();
  let num = nStr.split('').map(num => fact(Number(num))).reduce((sum, num) => num + sum);
  return n === num ? "STRONG!!!!" : "Not Strong !!";
}

function fact(num) {
  return num <= 1 ? 1 : num * fact(num - 1);
}

//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
function digPow(n, p) {
  let total = n.toString()
    .split('')
    .map((num, i) => Number(num) ** (p + i))
    .reduce((sum, num) => sum + num);
  if (total % n === 0) {
    return total / n;
  } else {
    return -1;
  }
}