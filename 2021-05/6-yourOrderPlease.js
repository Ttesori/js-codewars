// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

function order(words) {
  if (!words) return '';
  let wordRes = [];
  words.split(' ').forEach(word => {
    let num = word.match(/[0-9]/g)[0];
    wordRes[num - 1] = word;
  });
  return wordRes.join(' ');
}

// Examples
console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order("") === "");