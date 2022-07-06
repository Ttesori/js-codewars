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
