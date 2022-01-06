// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
function array(arr) {
  arr = arr.split(',');
  return arr.length > 2 ? arr.slice(1, -1).join(' ') : null;
}

// https://www.codewars.com/kata/59bd5dc270a3b7350c00008b/train/javascript
function checkTheBucket(bucket) {
  return bucket.includes('gold');
}

// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
function shortenToDate(longDate) {
  return longDate.split(',')[0];
}

// https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
function converter(mpg) {
  return Number(((mpg * 1.609344) / 4.54609188).toFixed(2));
}