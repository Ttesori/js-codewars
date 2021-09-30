// https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  return 'hello'.length;
}

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
function replace(s) {
  return s.replace(/([AEIOUaeiou])+?/g, '!')
}

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${queue.length - queue.indexOf('wolf') - 1}! You are about to be eaten by a wolf!`
}

// https://www.codewars.com/kata/57e3f79c9cb119374600046b
function hello(name) {
  return name ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : 'Hello, World!'
}

// https://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n) {
  if (n < 5) return n * 100;
  if (n >= 5 && n < 10) return n * 95;
  return n * 90;
}