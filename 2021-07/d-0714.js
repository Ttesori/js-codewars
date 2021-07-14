// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

const domainName = (url) => {
  let newUrl = url.replace('www.', '');
  if (newUrl.includes('https')) {
    newUrl = newUrl.replace('https://', '');
  } else {
    newUrl = newUrl.replace('http://', '');
  }
  let arr = newUrl.split('.');
  return arr[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");