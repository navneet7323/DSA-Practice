function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let max = findMax([1, 2, 3, 4, 5]);

console.log(max);

console.log("\n");

function findMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let output = findMin([10, 20, 30, 40]);

console.log(output);

console.log("\n");

function sumofArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let sumIs = sumofArray([1, 20, 3, 4]);

console.log(sumIs);

function AvgOfArray(arr) {
  if (!arr || arr.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;

  return avg;
}

console.log(AvgOfArray([1,2,3]));

function countEvenOdd(arr) {
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEven++;
    } else if (arr[i] % 2 !== 0) {
      countOdd++;
    }
  }
 console.log(`there are ${countEven} even`);
console.log(`there are ${countOdd} odd`);
}

countEvenOdd([1,2,3,4,5])

function reverseArr(arr){
    let reverse=[];
    for(let i=arr.length-1; i>=0; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

console.log(reverseArr([1,2,3]))

function findEle(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}

console.log(findEle([1,2,3,4],7))
console.log(findEle([1,2,3,7,6,7],7))

let arr = [10, 5, 78, 90, 20];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

let secondmax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondmax && arr[i] < max) {
    secondmax = arr[i];
  }
}

console.log(secondmax);

let arr = [1, 2, 3, 5];
let n = arr.length + 1;

let expectedSum = Number((n * (n + 1)) / 2);

let actualsum = 0;

for (let i = 0; i < arr.length; i++) {
  actualsum += arr[i];
}

let missingNum = expectedSum - actualsum;

console.log(missingNum);

let arr = [1, 1, 2, 2, 3, 4, 4,2,3];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

function maxEle(arr) {
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max;
}

console.log(
  maxEle([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);

function minEle(arr) {
  let min = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
  }
  return min;
}

let minVal = minEle([
  [9, 2, 3],
  [4, 5, 6],
]);
console.log(minVal);

function sum2DMatrix(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

let totalVal = sum2DMatrix([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(totalVal);



