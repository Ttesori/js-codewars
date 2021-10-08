// https://www.codewars.com/kata/55ca77fa094a2af31f00002a
const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// https://www.codewars.com/kata/568dc014440f03b13900001d
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  const chart = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  return prof in chart ? chart[prof] : 'Beer'
}

// https://www.codewars.com/kata/55ad04714f0b468e8200001c
function getChar(c) {
  return String.fromCharCode(c);
}

// https://www.codewars.com/kata/595970246c9b8fa0a8000086
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// https://www.codewars.com/kata/57faf7275c991027af000679
function remove(s, n) {
  for (let i = 1; i <= n; i++) {
    if (s.indexOf('!') === -1) break;
    s = s.replace('!', '');
  }
  return s;
}