function acess(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(acess([1, 3, 2, 5, 4, 7, 6]));

function des(arr) {
  for (let i = 1; i < arr.length ; i++) {
    for (let j = 0; j < arr.length-1; j++) {
        if (arr[j] < arr[j + 1]) {
      [arr[j], arr[(j +1)]] = [arr[j + 1], arr[j]];
    }
    }
    
  }
  return arr;
}

console.log(des([2,1,5,6,7,8]))