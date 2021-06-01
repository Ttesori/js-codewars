// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number. the number 1 should be appended to the new string. // foo099 -> foo100

function incrementString(str) {
  let re = /(^[a-z]*)(\d*$)/g; // Match letters at beginning, digits at end
  let results = re.exec(str);
  if (!results[2]) return str + '1'; // If no num at the end, add 1 and return
  let numlength = results[2].length; // remember original length of num
  let num = (Number(results[2]) + 1).toString().padStart(numlength, '0'); // add 1 and format
  return results[1] + num;
}

// Examples
console.log(incrementString("foobar000") === "foobar001");
console.log(incrementString("foo") === "foo1");
console.log(incrementString("foobar001") === "foobar002");
console.log(incrementString("foobar99") === "foobar100");
console.log(incrementString("foobar099") === "foobar100");
console.log(incrementString("") === "1");