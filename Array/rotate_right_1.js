let arr=[22,33,55,66];


let temp=arr[arr.length-1]

for(let i=arr.length-1; i>=0; i--){
    arr[i]=arr[i-1]
}

arr[0]=temp

console.log(arr);
