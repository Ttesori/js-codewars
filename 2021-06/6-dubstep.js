// To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

function songDecoder(song) {
  return song.split('WUB').filter(el => el !== '').join(' ');
}

// Tests
console.log(songDecoder("AWUBBWUBC") === "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC") === "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB") === "A B C");