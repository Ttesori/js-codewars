//https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript
function logs(x, a, b) {
  return Math.log(a * b) / Math.log(x);
}

//https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
class Hero {
  constructor(name = 'Hero') {
    this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

//https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return 'Woof'
  }
}

//https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript
function HQ9(code) {
  if (code === 'H') return 'Hello World!'
  if (code === 'Q') return code;
  if (code === '9') {
    let lyrics = '';
    for (let i = 99; i >= 0; i--) {
      lyrics += `${i === 99 ? '' : '\n'}${i === 0 ? 'No more' : i} ${i === 1 ? 'bottle' : 'bottles'} of beer on the wall, ${i === 0 ? 'no more' : i} ${i === 1 ? 'bottle' : 'bottles'} of beer.\n${i === 0 ? 'Go to the store and buy some more' : 'Take one down and pass it around'}, ${i === 0 ? 99 : i - 1 > 0 ? i - 1 : 'no more'} ${i - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.`
    }
    return lyrics;
  }
}

//https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
function validateHello(greetings) {
  res = /hello|ciao|salut|hallo|hola|ahoj|czesc/.test(greetings.toLowerCase())
  return res
}