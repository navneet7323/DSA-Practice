function MaxElement(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let result = MaxElement([1, 2, 3, 4, 5]);
console.log(result);
