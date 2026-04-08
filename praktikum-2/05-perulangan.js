console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
console.log(`Iterasi ke-${i}`);
}

console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
console.log(`Hitung mundur: ${hitung}`);
hitung--; // WAJIB: kurangi znilai agar loop tidak berjalan selamanya
}
console.log('Selesai!');

console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
if (i % 2 === 0) { // jika i habis dibagi 2 (sisa = 0), maka genap
process.stdout.write(i + ' '); // cetak di baris yang sama
}
}

console.log(''); 
console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
if (i === 4) {
console.log(`Melewati angka ${i} (continue)`);
continue; 
}5
if (i === 8) {
console.log(`Berhenti di angka ${i} (break)`);
break; 
}
console.log(`Angka: ${i}`);
}

// --- LATIHAN PERULANGAN ---
console.log("=== Bagian A: Segitiga Bintang ===");

// Bagian A: Segitiga Bintang
for (let i = 1; i <= 5; i++) {
  let baris = "";

  for (let j = 1; j <= i; j++) {
    baris += "*";
  }

  console.log(baris);
}


console.log("=== Bagian B: Bilangan Prima (1-50) ===");

// Bagian B: Bilangan Prima
for (let i = 2; i <= 50; i++) {
  let isPrima = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrima = false;
      break;
    }
  }

  if (isPrima) {
    console.log(i);
  }
}