class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(n) {
        let newNode = new Node(n);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;
    }
}

let ll = new SinglyLinkedList();
//let nde = new Node(23);
//=ll.push(nde);
ll.push(23);
ll.push(32);
console.log(ll);