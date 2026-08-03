let str = "qwerty";
let count = 0;

for (let i = 0; i < str.length; i++) {

  let ch=str[i].toUpperCase();

  if ("a"===ch || "e"===ch || "i"===ch || "o"===ch || "u" ===ch ) {
    count++;
  }
}

console.log(count);
