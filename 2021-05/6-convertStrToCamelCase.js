// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  if (str.length === 0) return ''; // If input is empty
  let delimeter = (str.indexOf('-') === -1) ? '_' : '-';
  let words = str.split(delimeter).map((word, i) => {
    if (i === 0) return word; // If first word, return word as-is
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join('');
}

// Examples
console.log(toCamelCase('') === '');
console.log(toCamelCase("the_stealth_warrior") === "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior") === "TheStealthWarrior")
console.log(toCamelCase("A-B-C") === "ABC")
console.log(toCamelCase("I-am-a-programmer") === "IAmAProgrammer")
console.log(toCamelCase("i-am-a-programmer") === "iAmAProgrammer")