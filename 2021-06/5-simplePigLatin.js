// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str.split(' ').map(word => {
    if (word[0].search(/[!?.,']/) > -1) return word;
    return word.slice(1) + word[0] + 'ay';
  }).join(' ');
}

// Examples
console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay')
console.log(pigIt('Hello world !') === 'elloHay orldway !')