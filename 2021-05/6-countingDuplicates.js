// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let freq = {};
  text.split('').forEach(char => {
    let currChar = char.toLowerCase();
    freq[currChar] = currChar in freq ? freq[currChar] + 1 : 1;
  });
  let distinct = 0;
  for (let key in freq) {
    if (freq[key] > 1) distinct++;
  }
  return distinct;
}

console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("indivisibility") === 1);
console.log(duplicateCount("Indivisibilities") === 2);
console.log(duplicateCount("aA11") === 2);
console.log(duplicateCount("ABBA") === 2);