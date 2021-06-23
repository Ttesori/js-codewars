// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

const NUMERALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}
var romanToInt = function (s) {
  // create var to hold integer
  let newInt = 0;
  // step through each character in the string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // If character is in our atypical chars array
    if (['I', 'X', 'C'].indexOf(char) > -1 && i !== s.length - 1) {
      // Proceed to look up next char
      let nextChar = s[i + 1];
      let result = NUMERALS[char + nextChar];
      // If char + nextChar is found in table, add to result & skip next loop
      if (result) {
        newInt += result;
        i++;
        continue;
      }
    }
    // If not an atypical char, simply add value to result
    let result = NUMERALS[char];
    newInt += result;
  }
  return newInt;
};

console.log(romanToInt("III"), 3);
console.log(romanToInt("IV"), 4);
console.log(romanToInt("IX"), 9);
console.log(romanToInt("LVIII"), 58);
console.log(romanToInt("MCMXCIV"), 1994);