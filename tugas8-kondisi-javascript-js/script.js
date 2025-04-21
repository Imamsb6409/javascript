// soal 1
let nilaiSusulanIT = 81;

if (nilaiSusulanIT >= 91) {
  console.log("grade A");
} else if (nilaiSusulanIT >= 81) {
  console.log("grade B");
} else if (nilaiSusulanIT >= 71) {
  console.log("grade C");
} else {
  console.log("grade D");
}

let grade =
  nilaiSusulanIT >= 91
    ? "A"
    : nilaiSusulanIT >= 81
    ? "B"
    : nilaiSusulanIT >= 71
    ? "C"
    : "D";

console.log(grade);

// soal 2
let nama = "nurudin";
let buahYangDibeli = "Nangka";
let totalBuahDibeli = 1;
switch (buahYangDibeli) {
  case "Chery":
    console.log("membeli chery");
    break;

  case "Nangka":
    console.log("membeli nangka");
    break;

  case "salak":
    console.log("membeli salak");
    break;

  case "salak dan nangka":
    console.log("membeli salak dan nangka");
    break;

  default:
    console.log("Nurudin tidak membeli apapun");
    break;
}
console.log(`${nama} membeli ${buahYangDibeli} ${totalBuahDibeli} buah`);

// soal 3
let saklar = undefined;

if (saklar) {
  console.log("saklarnya hidup");
} else {
  console.log("saklarnya mati");
}
