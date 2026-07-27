function findNum(arr) {
  let n = arr.length + 1;

  let expectedSum = Number((n * (n + 1)) / 2);
  let sum = 0;

  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let missingNumber = expectedSum - sum;
  return missingNumber;
}

console.log(findNum([1, 2, 4]));
