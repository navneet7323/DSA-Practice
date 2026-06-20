let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
let maxWord = sentences[0];
for (let i = 0; i < sentences.length; i++) {
  if (sentences[i] > maxWord) {
    maxWord = sentences[i];
  }
}
console.log(`Maximum number of word = ${maxWord}`);
