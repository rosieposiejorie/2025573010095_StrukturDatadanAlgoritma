class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok; }
  info() {
    console.log(`ID: ${this.id}, Nama: ${this.nama}, Harga: Rp${this.harga}, Stok: ${this.stok}`); }
  tersedia() {
    return this.stok > 0;}
  jual(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah harus lebih dari 0");
      return;}
    if (this.stok - jumlah < 0) {
      console.log("Stok tidak mencukupi");
      return; }
    this.stok -= jumlah;
    console.log(`${this.nama} berhasil terjual ${jumlah}`); }}
class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;}
  info() {
    super.info();
    console.log(`Ukuran File: ${this.ukuranFile}MB, Format: ${this.formatFile}`);}
  download() {
    console.log(`${this.nama} sedang di-download...`);}
  jual(jumlah) {
    console.log(`${this.nama} berhasil di-download (produk digital tidak mengurangi stok)`);}}
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;}
  info() {
    super.info();
    console.log(`Berat: ${this.beratGram} gram, Dimensi: ${this.dimensi}`);}
  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;}}
const p1 = new Produk(1, "Buku", 50000, 10);
const p2 = new ProdukDigital(2, "Ebook JS", 30000, 0, 5, "PDF");
const p3 = new ProdukFisik(3, "Laptop", 7000000, 5, 2000, "30x20x5 cm");
const p4 = new ProdukFisik(4, "Mouse", 150000, 0, 200, "10x5x3 cm");
const daftarProduk = [p1, p2, p3, p4];
console.log("=== Semua Produk ===");
daftarProduk.forEach(p => p.info());
const produkTersedia = daftarProduk.filter(p => p.tersedia());
console.log("=== Produk Tersedia ===");
produkTersedia.forEach(p => p.info());
const namaProduk = daftarProduk.map(p => p.nama);
console.log("=== Nama Produk ===");
console.log(namaProduk);