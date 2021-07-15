//Given a string, return a new string that has transformed based on the input: 
// Change case of every character, ie.lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces. You may assume the input only contain English alphabet and spaces.

const transformString = (str) => {
  let newStr = '';
  let currWord = [];
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (char === ' ' && currWord.length > 0) {
      newStr += currWord.reverse().join('') + char;
      currWord = [];
    } else if (char === ' ') {
      newStr += char;
    } else {
      char = char.charCodeAt(0) <= 90 ? char.toLowerCase() : char.toUpperCase();
      currWord.push(char)
    }
  }
  if (currWord.length > 0) {
    newStr += currWord.reverse().join('');
  }
  return newStr;
}

console.log(transformString("Example Input") === "iNPUT eXAMPLE");
console.log(transformString("HeLlO wOrLd") === "WoRlD hElLo");
console.log(transformString(" HeLlO wOrLd ") === " WoRlD hElLo ");
console.log(transformString(" HeLlO  wOrLd ") === " WoRlD  hElLo ");
console.log(transformString('  Maqm   Zn Mlr     Sdbe     Gwgh   Sh Irj'), 'iRJ sH   gWGH     sDBE     mLR zN   mAQM  ');