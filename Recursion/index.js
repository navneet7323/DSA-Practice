// print N to 1

function count(n) {
  if (n === 0) return;
  // console.log(n);
  count(n - 1);
}

count(5);
// print 1 to N

function count1toN(n) {
  if (n === 0) return 1;
  count1toN(n - 1);
  // console.log(n);
}
count1toN(10);

// print factorial of N
function fact(n) {
  if (n === 0) return 1;

  return n * fact(n - 1);
}

// console.log(fact(5));

// sum of 1 to N

function Sum(n) {
  if (n === 0) return 0;

  return n + Sum(n - 1);
}
// console.log(Sum(5));

// --------------

function fibonacci(n) {
  // Base case: return n if n is 0 or 1
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case: sum of the two preceding numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

// spelling

function countDigit(n){
 if(n===0) return 0;

 return 1+ countDigit(Math.floor(n/10));

}
console.log(countDigit(10));
