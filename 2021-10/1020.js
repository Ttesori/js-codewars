// https://www.codewars.com/kata/56598d8076ee7a0759000087
function calculateTip(amount, rating) {
  const ratings = {
    'terrible': 0,
    'poor': .05,
    'good': .1,
    'great': .15,
    'excellent': .2
  }
  return rating.toLowerCase() in ratings ? Math.ceil(amount * ratings[rating.toLowerCase()]) : 'Rating not recognised';
}

// https://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr) {
  var odd = [], even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i])
    }
  }
  return [odd, even];
}

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

// https://www.codewars.com/kata/545991b4cbae2a5fda000158
function include(arr, item) {
  return arr.includes(item);
}

// https://www.codewars.com/kata/5641a03210e973055a00000d
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}