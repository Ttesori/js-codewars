// https://www.codewars.com/kata/5963c18ecb97be020b0000a2
function derive(coefficient, exponent) {
  return `${exponent * coefficient}x^${exponent - 1}`
}

// https://www.codewars.com/kata/5761a717780f8950ce001473
function calculateAge(birthYear, year) {
  if (year === birthYear) return "You were born this very year!";
  if (year > birthYear) return `You are ${year - birthYear} ${year - birthYear > 1 ? 'years' : 'year'} old.`;
  return `You will be born in ${birthYear - year} ${birthYear - year > 1 ? 'years' : 'year'}.`
}