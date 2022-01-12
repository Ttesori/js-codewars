// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
function printArray(array) {
  return array.join()
}

// https://www.codewars.com/kata/5612e743cab69fec6d000077/train/javascript
var a = "dev"
var b = "Lab"

var name = a + b

//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}

//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
function divisors(integer) {
  const divisors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) divisors.push(i);
  }
  return divisors.length > 0 ? divisors : `${integer} is prime`
};
