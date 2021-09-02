// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

// https://www.codewars.com/kata/53af2b8861023f1d88000832
const areYouPlayingBanjo = name => name.toLowerCase()[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

// https://www.codewars.com/kata/5aa736a455f906981800360d
const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7
const makeUpperCase = str => str.toUpperCase();

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
const openOrSenior = data => data.map(person => person[0] >= 55 && person[1] > 7 ? 'Senior' : 'Open')