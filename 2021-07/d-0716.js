// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

const count = (str) => str.split('').reduce((obj, letter) => {
  if (obj[letter]) {
    obj[letter]++;
  } else {
    obj[letter] = 1;
  }
  return obj;
}, {});

console.log(count("aba"), { a: 2, b: 1 });
console.log(count("hello"), { h: 1, e: 1, l: 2, o: 1 });
console.log(count(""), {});