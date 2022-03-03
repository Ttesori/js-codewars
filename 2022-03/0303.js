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