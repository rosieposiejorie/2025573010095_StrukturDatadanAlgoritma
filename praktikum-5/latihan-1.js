// fungsi A
function fn(n) {
    return n * 2;
}
// fungsi B
function fungsiB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
        }
    }
}
// fungsi C
function fungsiC(n) {
    for (let i = 1; i < n; i *= 2) {
    }
}
// fungsi D
function fungsiD(n) {
    const arr = Array.from({ length: n }, (_, i) => i);

    arr.forEach(() => {
        arr.forEach(() => {
            arr.forEach(() => {
            });
        });
    });
}
// hitung waktu
function hitungKompleksitas(n, fn, nama) {
    const mulai = Date.now();
    fn(n);
    const selesai = Date.now();
    console.log(nama + " -> " + (selesai - mulai) + " ms");
}
// run
const n = 1000;
hitungKompleksitas(n, fn, "fungsi A");
hitungKompleksitas(n, fungsiB, "fungsi B");
hitungKompleksitas(n, fungsiC, "fungsi C");
hitungKompleksitas(50, fungsiD, "fungsi D");