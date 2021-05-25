// Build Tower by the following given argument: number of floors (integer and always greater than 0). For example, a tower of 3 floors looks like below:
// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

function towerBuilder(nFloors) {
  const totalSpaces = nFloors * 2 - 1;
  const tower = []
  for (let i = 1; i <= nFloors; i++) {
    let floorStars = i * 2 - 1;
    let floorSpaces = (totalSpaces - floorStars) / 2;
    tower.push(' '.repeat(floorSpaces) + '*'.repeat(floorStars) + ' '.repeat(floorSpaces));
  }
  return tower;
}

// Examples
console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);