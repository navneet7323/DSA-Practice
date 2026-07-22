// sum of arr
function sumOfArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArr([1, 2, 3, 4]);

// largest element of array
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
}

findMax([1, 2, 3]);

//smallest elemnet of array
function findMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}

findMin([10, 20, 30, 40]);

//count even

function countEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

countEven([2, 3, 4, 5, 6, 7]);

//count sum of  even number

function sumEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  console.log(sum)
}

sumEvenNumbers([1, 2, 3, 4, 5, 6])





let name='Riya';

let rev="";

for(let i=name.length-1; i>=0; i--){
    rev+=name[i];
}
console.log(rev);