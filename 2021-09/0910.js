
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
function howMuchILoveYou(nbPetals) {
  const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  let val = (nbPetals - 1) % phrases.length;
  return phrases[val]
}

// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l * 2) + (w * 2);
};

// https://www.codewars.com/kata/515e188a311df01cba000003
function getPlanetName(id) {
  let name;
  switch (id) {
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  return name;
}

// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// https://www.codewars.com/kata/5694cb0ec554589633000036
const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};