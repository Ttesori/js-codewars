// The code provided is supposed replace all the dots . in the specified String str with dashes - But it's not working properly.

const replaceDots = str => str.replace(/(\.)+?/g, '-');

console.log(replaceDots("one.two.three") === "one-two-three");
console.log(replaceDots("...") === "---");