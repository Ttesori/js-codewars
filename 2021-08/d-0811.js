// Given a string of characters, return the character that appears the most often.
// Case insensitive, if invalid string return -1

const freqChar = str => {
  if (str.length === 0) return -1;
  const freqTable = {};
  // Build freq table
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (freqTable[char]) {
      freqTable[char] += 1;
    } else {
      freqTable[char] = 1;
    }
  }
  let max = [0, ''];
  // Find max value
  for (let char in freqTable) {
    if (freqTable[char] > max[0]) {
      max[0] = freqTable[char];
      max[1] = char;
    }
  }
  return max[1];
}

console.log(freqChar('hheeeeelllooo') === 'e');
console.log(freqChar('HhHeello') === 'h');
console.log(freqChar('') === -1);
console.log(freqChar("Hello World!") === "l");