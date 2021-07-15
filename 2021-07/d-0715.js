//Given a string, return a new string that has transformed based on the input: 
// Change case of every character, ie.lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces. You may assume the input only contain English alphabet and spaces.

const transformString = (str) => str.split(' ').reverse().join(' ').split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');

console.log(transformString("Example Input") === "iNPUT eXAMPLE");
console.log(transformString("HeLlO wOrLd") === "WoRlD hElLo");
console.log(transformString(" HeLlO wOrLd ") === " WoRlD hElLo ");
console.log(transformString(" HeLlO  wOrLd ") === " WoRlD  hElLo ");
console.log(transformString('  Maqm   Zn Mlr     Sdbe     Gwgh   Sh Irj') === 'iRJ sH   gWGH     sDBE     mLR zN   mAQM  ');