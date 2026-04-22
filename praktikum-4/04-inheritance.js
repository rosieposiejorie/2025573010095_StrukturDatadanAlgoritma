class Kendaraan { 
    constructor(merk, model, tahun) { 
        this.merk  = merk; 
        this.model = model; 
        this.tahun = tahun; 
        this.kecepatanSaatIni = 0;  } 
        akselerasi(tambahan) { 
        this.kecepatanSaatIni += tambahan; 
        console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);  } 
    rem() { 
        this.kecepatanSaatIni = 0; 
        console.log(`${this.merk} ${this.model}: berhenti.`);   } 
    info() { 
        return `${this.tahun} ${this.merk} ${this.model}`;  } } 
class Mobil extends Kendaraan { 
    constructor(merk, model, tahun, jumlahPintu) { 
        super(merk, model, tahun); 
         this.jumlahPintu = jumlahPintu; } 
    bunyikanKlakson() { 
        console.log(`${this.merk}: Beep beep!`); } 
    info() { 
        const infoParent = super.info(); 
        return `${infoParent} (${this.jumlahPintu} pintu)`; } } 
class Motor extends Kendaraan { 
    constructor(merk, model, tahun, jenisMotor) { 
        super(merk, model, tahun); 
        this.jenisMotor = jenisMotor;  } 
    wheelie() { 
        if (this.kecepatanSaatIni > 50) { 
            console.log(`${this.merk}: Wheelie!`); 
        } else { 
            console.log('Kecepatan terlalu rendah untuk wheelie.');  } } 
    info() { 
        return `${super.info()} [${this.jenisMotor}]`;   } } 
const mobil = new Mobil('Toyota', 'Avanza', 2022, 4); 
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport'); 
console.log('=== Info Kendaraan ==='); 
console.log(mobil.info()); 
console.log(motor.info());
console.log('\n=== Aksi ==='); 
mobil.akselerasi(60); 
mobil.bunyikanKlakson(); 
console.log('\n=== Latihan 4.3 ===\n');
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;}
  bersuara() {
    console.log(`${this.nama} berkata: ${this.suara}`);}
  info() {
    console.log(`Nama: ${this.nama}`); }}
class Anjing extends Hewan {
  fetch() {
    console.log(`${this.nama} mengambil bola!`); }
  info() {
    super.info();
    console.log(`Jenis: Anjing`); }}
class Kucing extends Hewan {
  cakarSofa() {
    console.log(`${this.nama} mencakar sofa!`);}
  bersuara() {
    super.bersuara();
    console.log("Prrrrr...");}}
const anjing1 = new Anjing("Buddy", "Guk guk");
const anjing2 = new Anjing("Max", "Woof");
const kucing1 = new Kucing("Milo", "Meong");
const kucing2 = new Kucing("Luna", "Miaw");
const daftarHewan = [anjing1, anjing2, kucing1, kucing2];
daftarHewan.forEach(hewan => {
  hewan.bersuara();
  hewan.info();
  console.log("-----");});
