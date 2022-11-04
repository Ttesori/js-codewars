//https://www.codewars.com/kata/55a4f9afeffe4231090000d6/train/javascript
function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
function aliasGen(fname, lname) {
  const check = new RegExp(/^[A-Za-z]/)
  return check.test(fname) && check.test(lname) ? `${firstName[fname[0].toUpperCase()]} ${surname[lname[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.';
}