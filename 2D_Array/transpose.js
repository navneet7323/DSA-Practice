let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

let result = [];

for (let i = 0; i < arr[0].length; i++) {
  result[i] = [];

  for (let j = 0; j < arr.length; j++) {
    result[i][j] = arr[j][i];
  }
}

console.log(result);
