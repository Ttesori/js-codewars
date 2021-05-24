// Given: an array containing hashes of names Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  if (names.length === 0) return '';
  return names.map((name, i) => {
    if (i === names.length - 2) return name.name + ' &';
    if (i === names.length - 1) return name.name;
    return name.name + ','
  }).join(' ');
}

// Examples
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]) === 'Bart, Lisa, Maggie, Homer & Marge');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]) === 'Bart, Lisa & Maggie')
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]) === 'Bart & Lisa')
console.log(list([{ name: 'Bart' }]) === 'Bart')
console.log(list([]) === '')