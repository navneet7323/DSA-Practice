// A hash pair stores data in key value pairs


let map = new Map();

map.set("name", "ujjawal");
map.set("age", 21);

console.log(map);

// why need of hashmap

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 40) {
    console.log("Found");
  }
}
//the time complexity  is O(n) it is worst hashmap use O(1) is avrage case time compexity

let pair = new Map();

pair.set(10, "A");
pair.set(20, "B");
pair.set(30, "C");

console.log(pair.has(30));
console.log(pair.get(20));

console.log(pair.size);
console.log(pair.clear);
console.log(pair);



let nums=[1,2,2,3,3,3,4];

let freq=new Map();

