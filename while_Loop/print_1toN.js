let n = 14;
let i = 1;

while (i < n) {
  if (i % 5 == 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
