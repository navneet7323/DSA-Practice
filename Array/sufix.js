let arr = [1, 2, 3, 4];

let sum = 0;
let newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  sum += arr[i];
  newArr[i] = sum;
}

console.log(newArr);
