class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(5);

let mid = new Node(10);

head.next = mid;

let tail = new Node(13);

mid.next = tail;

console.log(head);
