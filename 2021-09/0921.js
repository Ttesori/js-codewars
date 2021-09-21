// https://www.codewars.com/kata/5865918c6b569962950002a1
function strCount(str, letter) {
  let count = str.match(new RegExp(letter, "g"));
  return count ? count.length : 0;
}

// https://www.codewars.com/kata/563b74ddd19a3ad462000054
function stringy(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
    str += (i % 2 === 0 ? '1' : '0');
  }
  return str;
}

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => geese.indexOf(bird) === -1)
};

// https://www.codewars.com/kata/58649884a1659ed6cb000072
function updateLight(current) {
  if (current === 'green') return 'yellow';
  if (current === 'yellow') return 'red';
  if (current === 'red') return 'green';
}

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i + 1];
    }
  }
  return null;
}