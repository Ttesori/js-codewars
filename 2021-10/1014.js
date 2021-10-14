// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
function main(verb, noun) {
  return verb + noun
}

// https://www.codewars.com/kata/5547929140907378f9000039
function shortcut(string) {
  return string.split('').filter(char => !'aeiou'.includes(char)).join('')
}

// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
function elevator(left, right, call) {
  return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}

// https://www.codewars.com/kata/5a34b80155519e1a00000009
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}

// https://www.codewars.com/kata/5899642f6e1b25935d000161
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
