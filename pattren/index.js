for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 6 - i; j++) {
    str += "*";
  }
  console.log(str);
}



///
for (let k = 1; k <= 5; k++) {
  let str = "";
  for (let j = 1; j <= k; j++) {
    str += "*";
  }
  //console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let row = " ";

  for (let j = 1; j <= 5; j++) {
    if (i === 1 || i === 5 || j === 1 || j == 5) {
      row += "*";
    } else {
      row += " ";
    }
  }
  //console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= i; k++) {
    row += "*";
  }
  // =console.log(row);
}




