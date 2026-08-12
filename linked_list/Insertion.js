class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(45);
let mid = new Node(67);
head.next = mid;

let newnode = new Node(44);
newnode.next = head;
head = newnode;

let last =new Node(98);



console.log(head.data);
