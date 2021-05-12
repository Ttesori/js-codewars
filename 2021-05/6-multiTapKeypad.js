// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values. For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

const presses = (phrase) => {
  let presses = 0;
  phrase.toUpperCase().split('').forEach(char => {
    presses += getKeyValue(char);
  });
  return presses;
}

const getKeyValue = (key) => {
  let keys = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'];
  let answer = keys.filter(keyGroup => keyGroup.indexOf(key) !== -1);
  return answer[0].indexOf(key) + 1;
}
console.log(presses("LOL") === 9);
console.log(presses("HOW R U") === 13);
console.log(presses("HOW R U") === 13);
console.log(presses("IS NE1 OUT THERE") === 31);