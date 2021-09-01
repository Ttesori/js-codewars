// https://www.codewars.com/kata/5861d28f124b35723e00005e
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
const countSheep = num => {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
}

// https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > (classPoints.reduce((c, num) => c + num, 0) / classPoints.length);
}

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c
const sum = numbers => numbers.reduce((count, num) => count + num, 0);

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  if (p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';
  }
  if (p2 === 'scissors' && p1 === 'paper' || p2 === 'paper' && p1 === 'rock' || p2 === 'rock' && p1 === 'scissors') {
    return 'Player 2 won!';
  }
};
