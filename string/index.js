function lenStr(str) {
  let count = 0;
  for (let ch of str) {
    count++;
  }
  return count;
}

console.log(lenStr("hello"));

function charStr(str){
    for(let i=0; i<str.length; i++){
        console.log(str[i]);
    }
}

charStr("heelo");

function countVol(str) {
  let vowel = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVol("navneet"));

function countConst(str){
    let count=0;
    let vowel='AEIOUaeiou';

    for(let i=0; i<str.length; i++){
        if(!vowel.includes(str[i])){
            count++
        }
    }
    return count;
}

console.log(countConst('javascript'))

function countUpper(str){
    let count=0;

    for(let i=0; i<str.length; i++){
     if(str[i]>="A" && str[i]<='Z'){
        count++
     }
    }
    return count;
}

console.log(countUpper("JAVAscript"));

function lowerCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      count++;
    }
  }
  return count;
}

console.log(lowerCase("he"));

function revStr(str) {

    let rev="";
  for (let i = str.length - 1; i >= 0; i--) {
    rev+=str[i]
  }
  return rev;
}

console.log(revStr("hello"))

function checkStr(str1, str2) {
  return str1 === str2 && str1.length === str2.length;
}

console.log(checkStr("hello", "hello"));

function convertInSmall(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(convertInSmall("HEllo ,I am NavNeEt"));



function convertInCapital(str){
    let result="";

    for(let i=0; i<str.length; i++){
        let code=str.charCodeAt(i)
        if(code >=97 && code<=122){
            result+=String.fromCharCode(code -32);
        }else{
            result+=str[i];
        }
    }
    return result;
}

console.log(convertInCapital("HELo"))



