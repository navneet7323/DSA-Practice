function findSubArray(arr) {
  let subArray = " ";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        subArray += arr[k] + "";
      }
       subArray += "\n";
    }
  }
  return subArray;
}


console.log(findSubArray([1,2,3,4,5]))