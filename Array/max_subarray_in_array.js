let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  let str = " ";

  for (let j = 0; j < arr.length; j++) {
    for (let k = i; k <= j; k++) {
      str += arr[k];
    }
    str += " ";
  }
  console.log(str);
}
