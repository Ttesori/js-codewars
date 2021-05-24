// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  return cc.split('').map((char, i) => i < cc.length - 4 ? '#' : char).join('');
}

// Examples
console.log(maskify("4556364607935616") === "############5616");
console.log(maskify("64607935616") === "#######5616");
console.log(maskify("1") === "1");
console.log(maskify("") === "");
console.log(maskify("Skippy") === "##ippy");
console.log(maskify("Nananananananananananananananana Batman!") === "####################################man!");