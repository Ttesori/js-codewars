// https://www.codewars.com/kata/551b4501ac0447318f0009cd
const booleanToString = b => b ? "true" : "false";

// https://www.codewars.com/kata/5556282156230d0e5e000089
const DNAtoRNA = dna => dna.replace(/([T])+?/g, 'U')

// https://www.codewars.com/kata/577a98a6ae28071780000989
const min = list => list.sort((a, b) => a - b)[0];
const max = list => list.sort((a, b) => b - a)[0];