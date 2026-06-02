class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// PALINDROM LINKED LIST
function palindrome(head) {
    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    let reversed = [...arr].reverse();
    return JSON.stringify(arr) === JSON.stringify(reversed);
}
// HAPUS NODE KE-N DARI AKHIR
function hapusNDariAkhir(head, n) {
    let dummy = new Node(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
// NODE TENGAH
function tengahLinkedList(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
// HELPER
function print(head) {
    let current = head;
    let result = "";
    while (current) {
        result += current.data + " -> ";
        current = current.next;
    }
    result += "null";
    console.log(result);
}
// TEST 1 PALINDROM
let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);
a.next.next.next = new Node(2);
a.next.next.next.next = new Node(1);
console.log("Palindrom:", palindrome(a));
// TEST 2 HAPUS N DARI AKHIR
let b = new Node(1);
b.next = new Node(2);
b.next.next = new Node(3);
b.next.next.next = new Node(4);
b.next.next.next.next = new Node(5);
console.log("\nSebelum:");
print(b);
b = hapusNDariAkhir(b, 2);
console.log("Sesudah:");
print(b);
// TEST 3 NODE TENGAH
let c = new Node(1);
c.next = new Node(2);
c.next.next = new Node(3);
c.next.next.next = new Node(4);
c.next.next.next.next = new Node(5);
c.next.next.next.next.next = new Node(6);
console.log(
    "\nNode Tengah:",
    tengahLinkedList(c).data
);