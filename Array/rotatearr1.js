let arr=[10,20,30,40,50,60];

let temp=[10,20,30];


for(let i=3; i<arr.length; i++){
    arr[i-3]=arr[i]
}

for(let i=0; i<temp.length; i++){
    arr[arr.length-3+i]=temp[i]
}

console.log(arr)