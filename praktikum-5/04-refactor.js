function adaDuplikatLambat(arr) {
 for (let i = 0; i < arr.length; i++)
 for (let j = i+1; j < arr.length; j++)
 if (arr[i] === arr[j]) return true;
 return false;
}
function adaDuplikatCepat(arr) {
 const seen = new Set();
 for (const x of arr) {
 if (seen.has(x)) return true;
 seen.add(x);
 }
 return false;
}
function frekuensiLambat(arr) {
 const unik = [];
 const hitung = [];
 for (const x of arr) {
 const idx = unik.indexOf(x); 
 if (idx === -1) { unik.push(x); hitung.push(1); }
 else hitung[idx]++;
 }
 return Object.fromEntries(unik.map((u,i) => [u, hitung[i]]));}
function frekuensiCepat(arr) {
 const counter = {};
 for (const x of arr) counter[x] = (counter[x] || 0) + 1;
 return counter;
}
const besar = Array.from({length: 20000}, () => Math.floor(Math.random() * 1000));
let t = Date.now();
adaDuplikatLambat(besar);
console.log('Duplikat LAMBAT O(n²):', Date.now()-t, 'ms');
t = Date.now();
adaDuplikatCepat(besar);
console.log('Duplikat CEPAT O(n) :', Date.now()-t, 'ms');
const kata = ['a','b','a','c','b','a','d'];
console.log('\nFrekuensi:', frekuensiCepat(kata));
console.log('\n=== Latihan 3.3 ===\n');
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }}}
    return null;}
function cariPasanganCepat(arr, target) {
    const seen = new Set();
    for (let num of arr) {
        const pasangan = target - num;
        if (seen.has(pasangan)) {
            return [pasangan, num];}
        seen.add(num);}
    return null;}
const data = [2, 7, 11, 15];
const target = 9;
console.log("=== Uji Dasar ===");
console.log("Lambat:", cariPasanganLambat(data, target));
console.log("Cepat :", cariPasanganCepat(data, target)); 
function ukurWaktu(label, fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`${label}: ${end - start} ms`);}
const dataBesar = Array.from({ length: 50000 }, () =>
    Math.floor(Math.random() * 100000)
);
const targetBesar = -1;
console.log("\n=== Uji Performa ===");
ukurWaktu("Lambat O(n^2)", () => {
    cariPasanganLambat(dataBesar, targetBesar);
});
ukurWaktu("Cepat  O(n)", () => {
    cariPasanganCepat(dataBesar, targetBesar);
});
