let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let min = matrix[0][0];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[i][j] < min) {
      min = matrix[i][j];
    }
  }
}
console.log(min);
