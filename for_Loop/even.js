let number = 25;

for (let i = 1; i <= number; i++) {
  if (i % 4 == 0) {
    continue;
  }
  if (i % 2 == 0) {
    console.log(i);
  }
}
