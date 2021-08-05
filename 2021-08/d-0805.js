// Your job is to figure out the index of which vowel is missing from a given string

function absentVowel(x) {
  const vowels = 'aeiou'.split('');
  for (let i = 0; i < vowels.length; i++) {
    if (x.indexOf(vowels[i]) === -1) {
      return i;
    }
  }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);