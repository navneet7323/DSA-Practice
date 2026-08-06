let arr=[22,33,55,66];

let temp=arr[0]
for(let i=1; i<arr.length; i++){
    arr[i-1]=arr[i]
}


arr[arr.length-1]=temp


console.log(arr)