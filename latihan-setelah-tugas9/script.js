let nilaiMtk = 70;
let nilai =
  nilaiMtk <= 81 && nilaiMtk > 80
    ? "jalan 1"
    : nilaiMtk < 80 && nilaiMtk >= 70
    ? "jalan 2"
    : "jalan 3";

console.log(nilai);
