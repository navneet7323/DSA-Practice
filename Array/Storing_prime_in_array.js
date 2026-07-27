function checkArrayPrime(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] <= 1) {
      continue;
    } else if (arr[i] > 1) {
      for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(checkArrayPrime([1, 2, 3, 4, 5, 6]));

function checkPrime(n) {
  let isPrime = true;

  if (n <= 1) {
    console.log("1 or less than 1 is not a prime number");
  } else if (n > 1) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return true;
    } else {
      return false;
    }
  }
  return isPrime;
}

console.log(checkPrime(5));
