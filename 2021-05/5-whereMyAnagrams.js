// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. 

function anagrams(word, words) {
  return words.filter(word2 => word.split('').sort().join('') === word2.split('').sort().join(''))
}

// Tests
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), [])