// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  text = text.toLowerCase().match(/[a-z]/g);
  if (!text) return ''; // If there are no matching letters, return
  return text.map((letter, i) => alphabet.indexOf(letter) + 1).join(' ');
}

// Examples
console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");