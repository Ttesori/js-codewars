// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

function rgb(r, g, b) {
  return [r, g, b].map(channel => {
    if (channel <= 0) return '00';
    if (channel >= 255) return 'FF';
    let col1 = Math.floor(channel / 16); // Take the number and divide by 16
    let col2 = (channel / 16 - col1) * 16; // Take the remainder and multiply by 16
    return (decToHex[col1] + '' + decToHex[col2])
  }).join('');
}

// Tests
console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300, 255, 255), 'FFFFFF')
console.log(rgb(173, 255, 47), 'ADFF2F')

var decToHex = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
}