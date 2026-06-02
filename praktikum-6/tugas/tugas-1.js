class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // Big O(1)
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    // Big O(1)
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    // Big O(n)
    insertAt(index, data) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.prepend(data);
            return;
        }
        if (index === this.size) {
            this.append(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }
    // Big O(n)
    delete(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
    }
    // Big O(n)
    reverse() {
        let current = this.head;
        let temp = null;
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
    // Big O(n)
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        result += "null";
        console.log("Forward:");
        console.log(result);
        current = this.tail;
        result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        result += "null";
        console.log("Backward:");
        console.log(result);
    }
}
// TESTING
const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAt(2, 15);
console.log("Data Awal:");
list.print();
list.delete(2);
console.log("\nSetelah Delete Index 2:");
list.print();
list.reverse();
console.log("\nSetelah Reverse:");
list.print();