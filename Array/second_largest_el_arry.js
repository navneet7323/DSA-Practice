let arr = [1, 33, 3, 4, 5];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

let secondlargest = -Infinity;

for (let j = 0; j < arr.length; j++) {
  if (arr[j] > secondlargest && arr[j] !== max) {
    secondlargest = arr[j];
  }
}

console.log(secondlargest);


