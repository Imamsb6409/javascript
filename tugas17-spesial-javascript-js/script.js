// soal 1
console.log(umur);
var umur = 25;
// let dirubah menjadi var agar bisa diakses diatas
console.log(umur);

// soal 2
("use strict");
x = 10;
console.log(x);

// soal 3
let data = "halo";
console.log(typeof data);
data = 42;
console.log(typeof data);
data = true;
console.log(typeof data);

// soal 4

let namaPengguna = prompt("Masukkan nama pengguna");
alert("Hello " + namaPengguna + ", selamat datang di pondok!");

// soal 5

function pesan(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  pesan(
    'apakah pengguna ingin melanjutkan ke halaman lain?',
    () => alert("Anda memilih untuk melanjutkan."),
    () => alert("Anda membatalkan tindakan.")
  );