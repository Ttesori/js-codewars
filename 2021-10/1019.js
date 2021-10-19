// https://www.codewars.com/kata/56530b444e831334c0000020
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm.indexOf('Y') !== -1 ? 'son' : 'daughter'}.`;
}

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  return arr.reduce((sum, el, i) => i !== arr.length - 1 ? sum + (el - arr[i + 1]) : sum, 0)
}

// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058
function spEng(sentence) {
  return /english/g.test(sentence.toLowerCase())
}