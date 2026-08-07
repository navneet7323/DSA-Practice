let arr = [1, 2, 3, 5];

let sum = 0;

let n = arr.length + 1;

let expectedSum = (n * (n + 1)) / 2;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

let missingNum = expectedSum - sum;

console.log(missingNum);