let arr=[1,2,3,4,5,6];


let temp=[4,5,6];


for(let i=3; i<arr.length; i++){
    arr[i]=arr[i-3]
}

for(let i=0; i<temp.length; i++){
   arr[i]=temp[i]
}
console.log(arr);
