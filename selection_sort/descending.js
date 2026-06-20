let arr = [10, 4, 7, 9, 14];

for (let i = 0; i < arr.length - 1; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[maxIndex]) {
      maxIndex = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[maxIndex];
  arr[maxIndex] = temp;
}
console.log(arr);
