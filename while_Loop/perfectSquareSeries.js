function square(n) {
  let i = 1;
  while (i * i <= n) {
    console.log(i ** 2);
    i++;
  }
  return i;
}

square(49);
