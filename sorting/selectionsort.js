let arr = [10, 30, 20, 40, 50];
let k = 3;

for (let i = 0; i < arr.length; i++) {
  let min = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}

console.log(arr);

console.log(arr[k - 1]);
