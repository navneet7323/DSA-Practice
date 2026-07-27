function transpose(matrix) {
  let result = [];

  // Create rows in result
  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = [];
  }

  // Fill the transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

console.log(
  transpose([
    [10, 20, 30],
    [40, 50, 60],
  ]),
);
