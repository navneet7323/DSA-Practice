let number = 1234;

let rev = 0;

while (number > 0) {
  let digit = number % 10;
  rev = rev * 10 + digit;
  number = Math.floor(number / 10);
}
console.log(rev);
