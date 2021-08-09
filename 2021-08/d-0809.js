// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “FizzBuzz”.

const fizzBuzz = num => {
  let output = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      output += 'FizzBuzz';
    } else if (i % 2 === 0) {
      output += 'Fizz';
    } else if (i % 3 === 0) {
      output += 'Buzz'
    } else {
      output += i;
    }
    if (i !== num) output += ' ';
  }
  return output;
}

console.log(fizzBuzz(6) === "1 Fizz Buzz Fizz 5 FizzBuzz");
console.log(fizzBuzz(2) === "1 Fizz");
console.log(fizzBuzz(3) === "1 Fizz Buzz");
console.log(fizzBuzz(12) === "1 Fizz Buzz Fizz 5 FizzBuzz 7 Fizz Buzz Fizz 11 FizzBuzz");