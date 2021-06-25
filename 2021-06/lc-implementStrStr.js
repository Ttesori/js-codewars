// Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => haystack.indexOf(needle);

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));