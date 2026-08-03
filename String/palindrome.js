let str = "madam";

let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}

if (str.length === rev.length && str === rev) {
  console.log("Palnirome");
} else {
  console.log("Not A Palnirome");
}
