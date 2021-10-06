// https://www.codewars.com/kata/56f6919a6b88de18ff000b36
function howManyDalmatians(number) {
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

  if (number <= 10) return dogs[0];
  if (number <= 50) return dogs[1];
  if (number === 101) return dogs[3];

  return dogs[2];
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
function move(position, roll) {
  return position + roll * 2;
}

// https://www.codewars.com/kata/55ecd718f46fba02e5000029
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

// https://www.codewars.com/kata/57a55c8b72292d057b000594
function reverse(string) {
  return string.split(' ').reverse().join(' ');
}

// https://www.codewars.com/kata/586c1cf4b98de0399300001d
function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}