// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array. Strings will be lowercase only, no spaces

const dup = s => s.map(word => word.split('').filter((char, i, arr) => char !== arr[i + 1]).join(''));

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]), ['codewars', 'picaniny', 'hubububo']);
console.log(dup(["abracadabra", "allottee", "assessee"]), ['abracadabra', 'alote', 'asese']);
console.log(dup(["kelless", "keenness"]), ['keles', 'kenes']);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), ['Wolomolo', 'flodoromonlighters', 'chuchchi']);