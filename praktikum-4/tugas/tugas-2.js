class Stack {
  constructor() {
    this.items = []; }
  push(item) {
    this.items.push(item);}
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop(); }
  isEmpty() {
    return this.items.length === 0;}}
function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();
  for (let char of ekspresi) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty()) {
        return false;}
      stack.pop(); }}
  return stack.isEmpty();}
const ekspresiList = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))"];
ekspresiList.forEach(exp => {
  const hasil = cekKurungSeimbang(exp);
  console.log(`${exp} => Seimbang: ${hasil}`);
});