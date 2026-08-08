let arr = [1, 2,3,4,5,6,7,8,5,1];

let start = 0;
let end = arr.length - 1;


while(start<end){
    let mid=Math.floor((start +end)/2);

    if(arr[mid]<arr[mid+1]){
        start=mid +1;

    }else{
        end=mid;
    }
   
}
console.log(arr[start]);
