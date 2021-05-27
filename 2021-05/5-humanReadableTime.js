// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
  seconds -= hours * 3600;
  let minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  seconds = (seconds - (minutes * 60)).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Tests
console.log(humanReadable(0), '00:00:00');
console.log(humanReadable(5), '00:00:05');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(86399), '23:59:59');
console.log(humanReadable(359999), '99:59:59');