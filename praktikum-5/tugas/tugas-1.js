function intersectionLambat(arr1, arr2) {
    const hasil = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                hasil.push(arr1[i]);
        }}}
    return hasil;
}
function intersectionCepat(arr1, arr2) {
    const set = new Set(arr1);
    const hasil = [];
    for (let num of arr2) {
        if (set.has(num)) {
            hasil.push(num);
        }}
    return hasil;
}
function kelompokAnagram(arr) {
    const map = {};
    for (let kata of arr) {
        const key = kata.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(kata);
    }
    return Object.values(map);
}
function sumKuadratLambat(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
        }}}}
    return false;
}
function sumKuadratCepat(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    for (let k = n - 1; k >= 0; k--) {
        let i = 0;
        let j = k - 1;
        while (i < j) {
            const sum = arr[i] + arr[j];
            const target = arr[k] * arr[k];
            if (sum === target) return true;
            if (sum < target) i++;
            else j--;
        } }
    return false;
}
function ukurWaktu(label, fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`${label}: ${end - start} ms`);
}
console.log("=== FUNGSI A ===");
const a1 = [1,2,3,4,5];
const a2 = [3,4,5,6,7];
console.log("Lambat:", intersectionLambat(a1, a2));
console.log("Cepat :", intersectionCepat(a1, a2));
console.log("\n=== FUNGSI B ===");
const words = ['eat','tea','tan','ate','nat','bat'];
console.log(kelompokAnagram(words));
console.log("\n=== FUNGSI C ===");
const nums = [2,3,5,7];
console.log("Lambat:", sumKuadratLambat(nums));
console.log("Cepat :", sumKuadratCepat(nums));
const besar1 = Array.from({length: 5000}, () => Math.floor(Math.random()*1000));
const besar2 = Array.from({length: 5000}, () => Math.floor(Math.random()*1000));
console.log("\n=== UJI PERFORMA ===");
ukurWaktu("Intersection Lambat O(n^2)", () => {
    intersectionLambat(besar1, besar2);
});
ukurWaktu("Intersection Cepat O(n)", () => {
    intersectionCepat(besar1, besar2);
});
ukurWaktu("Sum Kuadrat Lambat O(n^3)", () => {
    sumKuadratLambat(besar1.slice(0, 200)); 
});
ukurWaktu("Sum Kuadrat Cepat O(n log n)", () => {
    sumKuadratCepat(besar1.slice(0, 200));
});

// === kesimpulan ===
// - Versi cepat selalu lebih baik untuk data besar
// - Menggunakan Set / sorting bisa mengurangi kompleksitas drastis
// - Trade-off: versi cepat kadang butuh memori tambahan