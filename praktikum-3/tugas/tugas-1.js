const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 50 }];
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce((acc, mhs, index, arr) => {
    acc.total = arr.length;
    acc.totalNilai += mhs.nilai;
    if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
    if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;
    return acc;  }, {
    total: 0,
    totalNilai: 0,
    tertinggi: -Infinity,
    terendah: Infinity  });
  hasil.rataRata = hasil.totalNilai / hasil.total;
  return hasil;}
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);}
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;
    if (mhs.nilai >= 80) grade = "A";
    else if (mhs.nilai >= 70) grade = "B";
    else if (mhs.nilai >= 60) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";
    return { ...mhs, grade };  });}
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);
console.log("=== STATISTIK ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai : ${statistik.rataRata}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);
console.log("\n=== MAHASISWA LULUS (>=70) ===");
mahasiswaLulus.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);});
console.log("\n=== DATA MAHASISWA + GRADE ===");
mahasiswaDenganGrade.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai} (Grade: ${mhs.grade})`); });