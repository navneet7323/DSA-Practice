function prime(n) {
  let newArr = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    // Check if i has any divisor
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(prime(8)); // [2, 3, 5, 7]
