let sentence = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
let maxWord = sentence[0];
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] > maxWord) {
    maxWord = sentence[i];
  }
}
console.log(`Maximum number of word = ${maxWord}`);
