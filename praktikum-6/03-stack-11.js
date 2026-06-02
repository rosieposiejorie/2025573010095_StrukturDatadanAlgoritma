// NODE CLASS
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// LINKED LIST CLASS
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // Tambah di depan
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    // Hapus berdasarkan index
    deleteAt(index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        // Hapus head
        if (index === 0) {
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
            this.size--;
            return;
        }
        let current = this.head;
        let previous = null;
        let i = 0;
        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = current.next;
        if (current === this.tail) {
            this.tail = previous;
        }
        this.size--;
    }
    // isEmpty()
    isEmpty() {
        return this.size === 0;
    }
    // Print linked list
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}
// STACK CLASS
class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    // push(data)
    push(data) {
        this.list.prepend(data);
    }
    // pop()
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.list.head.data;
        this.list.deleteAt(0);
        return value;
    }
    // peek()
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.list.head.data;
    }
    // isEmpty()
    isEmpty() {
        return this.list.isEmpty();
    }
    // size()
    size() {
        return this.list.size;
    }
    // print()
    print() {
        this.list.print();
    }
}
// TESTING STACK
const stack = new Stack();
stack.push("Ketik A");
stack.push("Ketik B");
stack.push("Hapus Teks");
console.log("Isi Stack:");
stack.print();
console.log("Peek:", stack.peek());
console.log("Undo:", stack.pop());
console.log("Setelah Undo:");
stack.print();
console.log("Ukuran Stack:", stack.size());
console.log("Apakah kosong?", stack.isEmpty());