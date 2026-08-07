let  s='abcaa';

let rev='';


for(let i=s.length-1; i>=0; i--){
    rev+=s[i]
}

let word=s.concat(rev)

console.log(word);
