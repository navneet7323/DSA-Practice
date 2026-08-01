let arr = [1, 2, 3, 4];

let sum = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  newArr.push(sum);
}

console.log(newArr);
