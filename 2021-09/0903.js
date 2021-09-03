// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
function isDivideBy(number, a, b) {
  return Number.isInteger(number / a) && Number.isInteger(number / b);
}

// https://www.codewars.com/kata/53dc23c68a0c93699800041d
function smash(words) {
  return words.join(' ');
};

// https://www.codewars.com/kata/583710ccaa6717322c000105
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// https://www.codewars.com/kata/577ff15ad648a14b780000e7
function greet(language) {
  const db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  if (language in db) return db[language];
  return db['english'];
}

// https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
  return this.split('').map(char => char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join('');
}