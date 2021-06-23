// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  // sort list by word length
  let sorted = strs.sort(byLength);
  // compare each letter of shortest word to the rest
  let wordToTest = sorted[0];
  let prefix = '';
  // step through each letter in shortest word
  for (let i = 0; i < wordToTest.length; i++) {
    let char = wordToTest[i];
    // test letter against letter of other elements
    for (let j = 1; j < sorted.length; j++) {
      if (char === sorted[j][i]) {
        continue;
      }
      // as soon as we hit a non-matching char, return prefix
      return prefix;
    }
    // if letter is match to all, add it to prefix var
    prefix += char;
  }
  return prefix;
};

function byLength(a, b) {
  if (a.length > b.length) {
    return 1;
  }
  if (a.length < b.length) {
    return -1;
  }
  return 0;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");