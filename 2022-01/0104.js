// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript

function whoIsPaying(name) {
  return name.length < 3 ? [name] : [name, name.slice(0, 2)];
}


// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}


//https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + (40 - mm) + "mm of water"
  }
  else {
    return "Your plant has had more than enough water for today!"
  };
}

//https://www.codewars.com/kata/52adc142b2651f25a8000643/train/javascript
function Sleigh() { }
Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};