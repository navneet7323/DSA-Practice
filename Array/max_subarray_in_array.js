let arr = [1, 2, 3];

for (let start = 0; start < arr.length; start++) {
  let str = " ";
  
  for (let end = 0; end < arr.length; end++) {
    for (let k = start; k <= end; k++) {
      str += arr[k];
    }
    str += " ";
  }
  console.log(str.trim());
}
