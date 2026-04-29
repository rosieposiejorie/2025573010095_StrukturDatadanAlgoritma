 function fn_O1(n) {
    return n + 1;
}
function fn_On(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}
function fn_OnLogn(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            total += j;
        }  }
    return total;
}
function fn_On2(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            total += i + j;
        }}
    return total;
}
function ukurWaktu(fn, n) {
    const start = Date.now();
    fn(n);
    const end = Date.now();
    return end - start;
}
function benchmarkSemua(ukuranData) {
    console.log("=== Benchmark Big O ===");

    ukuranData.forEach(n => {
        console.log(`\nUkuran data: ${n}`);

        const t1 = ukurWaktu(fn_O1, n);
        const t2 = ukurWaktu(fn_On, n);
        const t3 = ukurWaktu(fn_OnLogn, n);
        const t4 = ukurWaktu(fn_On2, n);

        console.log(`O(1)     : ${t1} ms`);
        console.log(`O(n)     : ${t2} ms`);
        console.log(`O(n log n): ${t3} ms`);
        console.log(`O(n^2)   : ${t4} ms`);
    });
}
benchmarkSemua([100, 500, 1000, 5000, 10000]);
// === analisis dan kesimpulan ===
// - O(1) hampir tidak berubah walaupun ukuran data meningkat
// - O(n) meningkat secara linear
// - O(n log n) lebih lambat dari O(n), tapi masih cukup efisien
// - O(n^2) meningkat sangat drastis dan menjadi paling lambat

// Kesimpulan:
// Pola pertumbuhan yang diamati konsisten dengan teori Big O,
// dimana semakin tinggi kompleksitas, semakin cepat waktu eksekusi meningkat.