// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
function array(arr) {
  arr = arr.split(',');
  return arr.length > 2 ? arr.slice(1, -1).join(' ') : null;
}

// https://www.codewars.com/kata/59bd5dc270a3b7350c00008b/train/javascript
function checkTheBucket(bucket) {
  return bucket.includes('gold');
}

