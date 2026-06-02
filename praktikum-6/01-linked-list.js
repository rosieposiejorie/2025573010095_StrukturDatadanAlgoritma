class Node {
    constructor(data){
        this.data = data; //nilai yang disimpan
        this.next = null; //pointer ke node selanjutnya
    }
}
//-- class linkedlist-----------
class LinkedList {
    constructor(){
        this.head = null; //pointer ke node pertama
        this.size = 0; //jumlah node
    }
    //tambah node diakhir -> O(n)
    append(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next; //traverse ke akhir
            current.next = newNode;
        }
        this.size++;
    }
    //tabah node diawal -> O(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    //insert data di posisi tertentu -> O(n)
    insertAt(data, index){
        if (index < 0 || index > this.size){
            console.log(' Index di luar batas!');
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
    // Hapus node berdasarkan nilai — O(n)
    delete(data) {
        if (!this.head) return false;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // Cari node berdasarkan nilai — O(n)
    search(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;

            current = current.next;
            index++;
        }
        return -1;
    }
    // Tampilkan semua node — O(n)
    print() {
        if (!this.head) {
            console.log('[List kosong]');
            return;
        }
        let result = '';
        let current = this.head;
        while (current) {
            result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
            current = current.next;
        }
        console.log(result, `(size: ${this.size})`);
    }
    // Balik urutan list — O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    // Konversi ke Array (untuk inspeksi) — O(n)
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    // ====== LATIHAN 2.3 ====== 
    // getAt(index) — O(n)
    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }
    // deleteAt(index) — O(n)
    deleteAt(index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
    }
    // indexOf(data) — O(n)
    indexOf(data) {
        return this.search(data);
    }
    // isEmpty() — O(1)
    isEmpty() {
        return this.size === 0;
    }
    // clear() — O(1)
    clear() {
        this.head = null;
        this.size = 0;
    }
}
// ── Demonstrasi ────────────────────────────────
const ll = new LinkedList();
console.log('=== Append ===');
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();
console.log('\n=== Prepend ===');
ll.prepend(5);
ll.print();
console.log('\n=== Insert di indeks 2 ===');
ll.insertAt(15, 2);
ll.print();
console.log('\n=== Search ===');
console.log(' Indeks nilai 20:', ll.search(20));
console.log(' Indeks nilai 99:', ll.search(99));
console.log('\n=== Delete 20 ===');
ll.delete(20);
ll.print();
console.log('\n=== Reverse ===');
ll.reverse();
ll.print();
// ===== TESTING LATIHAN 2.3 =====
console.log('\n=== getAt() ===');
console.log('Data pada index 2:', ll.getAt(2));
console.log('\n=== indexOf() ===');
console.log('Index nilai 30:', ll.indexOf(30));
console.log('\n=== isEmpty() ===');
console.log('Apakah kosong?', ll.isEmpty());
console.log('\n=== deleteAt(1) ===');
ll.deleteAt(1);
ll.print();
console.log('\n=== clear() ===');
ll.clear();
ll.print();
console.log('\n=== isEmpty() setelah clear ===');
console.log('Apakah kosong?', ll.isEmpty());