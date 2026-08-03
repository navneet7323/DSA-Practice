let str = [1, 2, 1, 2, 3, 4, 5, 6];
const frequency = {};

for (let i = 0; i < str.length; i++) {
  const char = str[i];

  if (frequency[char]) {
    frequency[char] += 1;
  } else {
    frequency[char] = 1;
  }
}

console.log(frequency);
