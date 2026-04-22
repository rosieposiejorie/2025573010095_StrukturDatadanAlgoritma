const mahasiswa = {
nama : 'Budi Santoso',
umur : 20,
jurusan : 'Teknik Informatika',
ipk : 3.75,
aktif : true,};
console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);
const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]); 
mahasiswa.email = 'budi@email.com';
mahasiswa.umur = 21;
console.log('\nSetelah diubah:', mahasiswa);
delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);
const dosen = {
nama : 'Dr. Ahmad Fauzi',
mataKuliah : 'Struktur Data',
pengalaman : 10, 
perkenalan() {
return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;},
statusSenior() {
if (this.pengalaman >= 10) {
return `${this.nama} adalah dosen senior.`;}
return `${this.nama} adalah dosen junior.`;}};
console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
if (typeof dosen[key] !== 'function') { 
console.log(` ${key}: ${dosen[key]}`);}}
console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));
console.log('\n\n=== Latihan 1.3 ===\n');
const buku = {
  judul: "Laut Bercerita",
  pengarang: "Leila S. Chudori",
  tahunTerbit: 2017,
  harga: 100000,
  tersedia: true,
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;},
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);}};
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));
const koleksiBuku = [{
    judul: "Laut Bercerita",
    pengarang: "Leila S. Chudori",
    tahunTerbit: 2017,
    harga: 100000,
    tersedia: true,
    info: function () {
      return `${this.judul} oleh ${this.pengarang}`;  }},
  { judul: "Bumi",
    pengarang: "Tere Liye",
    tahunTerbit: 2014,
    harga: 85000,
    tersedia: false,
    info: function () {
      return `${this.judul} oleh ${this.pengarang}`;}},
  { judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    tahunTerbit: 2009,
    harga: 90000,
    tersedia: true,
    info: function () {
      return `${this.judul} oleh ${this.pengarang}`;}}];
koleksiBuku.forEach(function (buku) {
  console.log(buku.info());});
const bukuTersedia = koleksiBuku.filter(function (buku) {
  return buku.tersedia === true;});
console.log("Buku yang tersedia:");
console.log(bukuTersedia);