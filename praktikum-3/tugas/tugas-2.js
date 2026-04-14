function pangkat(basis, eksponen) {
  if (eksponen === 0) {
    return 1;  }
  return basis * pangkat(basis, eksponen - 1);}
console.log("=== UJI PANGKAT ===");
console.log(pangkat(2, 3));
console.log(pangkat(5, 2));
console.log(pangkat(3, 4));
function balikString(str) {
  if (str.length <= 1) {
    return str; }
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));}
console.log("\n=== UJI BALIK STRING ===");
console.log(balikString("halo")); 
console.log(balikString("javascript"));
function cekPalindrom(str) {
  const dibalik = balikString(str);
  return str === dibalik;}
console.log("\n=== UJI PALINDROM ===");
const kataUji = ["katak", "civic", "level", "hello"];
kataUji.forEach(kata => {
  if (cekPalindrom(kata)) {
    console.log(`${kata} adalah palindrom`);
  } else {
    console.log(`${kata} bukan palindrom`);}});