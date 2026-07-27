function maxEle(arr) {
  let min = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
  }
  return min
}

console.log(maxEle([
    [10,20,30],
    [40,50,60],
]))
