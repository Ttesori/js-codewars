// https://www.codewars.com/kata/5b853229cfde412a470000d0
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld * 2));
}

// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
function getAge(inputString) {
  return parseInt(inputString[0]);
}

// https://www.codewars.com/kata/56f173a35b91399a05000cb7
function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
function switchItUp(number) {
  return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number]
}

// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}