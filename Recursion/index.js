function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}
//console.log(sum(5));

function fact(n) {
  if (n === 0) return 1;

  return n * fact(n - 1);
}

//console.log(fact(4));

function fib(n) {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6));

function print1ton(n){
    if(n===0) return;

    print1ton(n-1)

    // console.log(n);
    
}

print1ton(10);


function printNto1(n){
    if(n===0) return ;

    // console.log(n);
    printNto1(n-1)
}

printNto1(10);




