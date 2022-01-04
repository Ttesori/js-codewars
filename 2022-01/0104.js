// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript

function whoIsPaying(name) {
  return name.length < 3 ? [name] : [name, name.slice(0, 2)];
}


// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}
