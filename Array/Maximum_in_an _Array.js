function MaxElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let result = MaxElement([1, 2, 3, 4, 5]);
console.log(result);
