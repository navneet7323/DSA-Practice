let arr = [2, 4, 6, 8, 8, 8, 8, 11, 13];

let target = 8;

let start = 0;
let end = arr.length - 1;

let first = -1;

// Find first occurrence
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    first = mid;
    end = mid - 1; // search left
  } 
  else if (arr[mid] < target) {
    start = mid + 1;
  } 
  else {
    end = mid - 1;
  }
}

console.log(`First occurrence of ${target} is index ${first}`);


// RESET start and end
start = 0;
end = arr.length - 1;

let last = -1;

// Find last occurrence
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    last = mid;
    start = mid + 1; // search right
  } 
  else if (arr[mid] < target) {
    start = mid + 1;
  } 
  else {
    end = mid - 1;
  }
}

console.log(`Last occurrence of ${target} is index ${last}`);