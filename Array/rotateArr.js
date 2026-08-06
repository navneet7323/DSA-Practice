let arr=[1,2,3,4,5,6,7];

let temp=[1,2,3,4];

let k=4;

for(let i=k; i<arr.length; i++){
    arr[i-k]=arr[i]
}
for(let i=0; i<temp.length; i++){
    arr[arr.length-4 + i]=temp[i]
}

console.log(arr)




