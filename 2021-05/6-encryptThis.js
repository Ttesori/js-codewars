const encryptThis = function (text) {
  return text.split(' ').map(word => {
    let code = word.charCodeAt(0);
    if (word.length === 2) {
      code += word[word.length - 1];
    } else if (word.length > 2) {
      code += word[word.length - 1] + word.slice(2, -1) + word[1];
    }
    return code;
  }).join(' ');
}

console.log(encryptThis("Hello") === "72olle");
console.log(encryptThis("good") === "103doo");
console.log(encryptThis("hello world") === "104olle 119drlo");

// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
  // Your message is a string containing space separated words.
  // You need to encrypt each word in the message using the following rules:
  // The first letter needs to be converted to its ASCII code.
  // The second letter needs to be switched with the last letter
  // Keepin' it simple: There are no special characters in input.