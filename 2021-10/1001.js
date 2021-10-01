// https://www.codewars.com/kata/5704aea738428f4d30000914
function tripleTrouble(one, two, three) {
  let str = '';
  for (let i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i];
  }
  return str;
}

// https://www.codewars.com/kata/523b66342d0c301ae400003b
const multiply = (x, y) => x * y;

// https://www.codewars.com/kata/57a4d500e298a7952100035d
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  return 0;
}

// https://www.codewars.com/kata/55a5bfaa756cfede78000026
function problem(x) {
  return typeof x === "string" ? "Error" : (50 * x) + 6;
}