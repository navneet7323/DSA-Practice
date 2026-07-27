function maxEle(arr) {
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max
}

console.log(maxEle([
    [10,20,30],
    [40,50,60],
]))
