let str1 = "love";
let str2 = "olev";

if (str1.length === str2.length) {
  let f1 = {};
  let f2 = {};

  
  for (let s1 of str1) {
    if (f1[s1]) {
      f1[s1] += 1;
    } else {
      f1[s1] = 1;
    }
  }

  
  for (let s2 of str2) {
    if (f2[s2]) {
      f2[s2] += 1;
    } else {
      f2[s2] = 1;
    }
  }

  
  let isAnagram = true;

  for (let ch of str1) {
    if (f1[ch] !== f2[ch]) {
      isAnagram = false;
      break;
    }
  }

  if (isAnagram) {
    console.log("Anagram");
  } else {
    console.log("Not an Anagram");
  }
} else {
  console.log("It is not an Anagram because lengths are not equal");
}