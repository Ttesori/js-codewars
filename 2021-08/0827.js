// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
function paperwork(n, m) {
  if (m < 0 || n < 0) return 0;
  return n * m;
}

// https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25.0) return "Normal";
  if (bmi <= 30) return "Overweight";
  return "Obese";
}

