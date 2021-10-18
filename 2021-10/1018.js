// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
function differenceInAges(ages) {
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}

// https://www.codewars.com/kata/571f1eb77e8954a812000837
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e
function stairsIn20(s) {
  return s.reduce((total, day) => total + day.reduce((sum, date) => sum + date, 0), 0) * 20;
}

// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
function lowercaseCount(str) {
  return str.match(/[a-z]/g) ? str.match(/([a-z])/g).length : 0;
}