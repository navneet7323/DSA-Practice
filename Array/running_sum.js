let arr = [1, 2, 5, 8];

let newArr = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  newArr.push(sum);
}

console.log(newArr);
