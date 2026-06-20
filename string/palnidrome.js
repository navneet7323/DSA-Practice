let str = "madam";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}

if (str.length === rev.length && str === rev) {
  console.log("Given word is palnidrome");
} else {
  console.log("Not Palnidrome");
}
