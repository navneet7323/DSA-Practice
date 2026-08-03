let str = "asdfsdfa";

let obj = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (obj[ch]) {
    obj[ch] += 1;
  } else {
    obj[ch] = 1;
  }
}

console.log(obj);
