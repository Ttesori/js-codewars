//Given a string, return a new string that has transformed based on the input: 
// Change case of every character, ie.lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces. You may assume the input only contain English alphabet and spaces.

const transformString = (str) => {
  // Trim string
  str = str.trim();
  // Deal with extra spaces - take down to one space
  str = str.replace(/\s+/g, " ");
  // Reverse the order of words & join
  str = str.split(' ').reverse().join(' ');
  // Change case of every character
  newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    newStr += char.charCodeAt(0) < 90 ? char.toLowerCase() : char.toUpperCase();
  }
  return newStr;
}

console.log(transformString("Example Input") === "iNPUT eXAMPLE");
console.log(transformString("HeLlO wOrLd") === "WoRlD hElLo");
console.log(transformString(" HeLlO wOrLd ") === "WoRlD hElLo");
console.log(transformString(" HeLlO  wOrLd ") === "WoRlD hElLo");