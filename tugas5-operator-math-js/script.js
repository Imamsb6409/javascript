// const penjelasanJ = require('penjelasanJ');
// latihan 1
let jumlahLayangan = 5;
let layangan1 = "merah";
let layangan2 = "biru";
let layangan3 = "hijau";
let layangan4 = "kuning";
let layangan5 = "ungu";

let layanganMasukGot = layangan3;
let layanganDicuri = layangan5;

// jawab 1
console.log(`Jumlah layangan fuad sebelum rusak adalah ${jumlahLayangan} `);
// jawab 2
console.log(
  `Layangan yang rusak yaitu ${layanganMasukGot} dan ${layanganDicuri}`
);
// jawab 3
let total = jumlahLayangan - 2;
console.log(`Jumlah/total layangannya fuad setelah rusak adalah ${total}`);

// latihan 2

let jumlahIceCream = 3;
let IceCream1 = "matcha";
let IceCream2 = "chocolate";
let IceCream3 = "vanilla";

let IceCreamDiberiKeAnhar = IceCream2;

// jawab 1
console.log(` Jumlah ice cream Raffa adalah ${jumlahIceCream}`);
// jawab 2
console.log(`Rasa ice cream Raffa yang ke-2 adalah ${IceCream2}`);
// jawab 3
console.log(`Rasa ice cream Raffa yang ke-3 adalah ${IceCream3}`);
// jawab 4
console.log(`Ice cream Anhar adalah rasa ${IceCreamDiberiKeAnhar}`);
// jawab 5
let totalAkhirIceCream = jumlahIceCream - 1;
console.log(
  `Total update ice cream Raffa setelah diberikan adalah ${totalAkhirIceCream}`
);

// latihan 1 form

let jumlahPermen = 30;

let permenDiberiKeBudi = 10;

let jumlahPermenSetelahDiberiKeBudi = jumlahPermen - permenDiberiKeBudi;
let jumlahPermenSetelahDibeli = jumlahPermenSetelahDiberiKeBudi * 2;
console.log(jumlahPermenSetelahDibeli);

// jawab 1
console.log(
  `Jumlah permen ana yang dimiliki Sekarang adalah ${jumlahPermenSetelahDibeli}`
);
// jawab 2
console.log(
  `Jumlah permen ana adalah ${jumlahPermenSetelahDibeli}, setelah diquadratkan adalah ${(jumlahPermenSetelahDibeli *=
    jumlahPermenSetelahDibeli)}`
);

// latihan 2 form
let totalKucing = 2;
let kucing1 = "Ali";
let kucing2 = "Hasan";

let namaGabungan = kucing1 + kucing2;
// jawab 1
console.log(
  `nama kucing pertama adalah ${kucing1} dan nama kucing ke 2 adalah ${kucing2}`
);
// jawab 2
console.log(
  `penggabungan ke kucing pertama dan kucing ke dua adalah ${namaGabungan}`
);

// latihan 3 form
let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasilBelalangNyamuk = +belalang + nyamuk;
console.log(hasilBelalangNyamuk);

let hasilNyamukAngsa = +nyamuk + angsa;
console.log(hasilNyamukAngsa);
// jawab 1
console.log(`hasil pertama adalah ${hasilBelalangNyamuk}`);
// jawab 2
console.log(`hasil ke-2 adalah ${hasilNyamukAngsa}`);
// jawab 3
let penjelasanHasilPertama = `belalang dan nyamuk seaslinya adalah sebuah string, namun setelah itu belalangan dikonversi menjadi sebuah number, tetapi nyamuk tidak dikonversi menjadi number, dikarnakan nyamuk adalah string sehingga hasilnya adalah string dan angka jadi tidak ditambahkan.`;
console.log(`penjelasan hasil pertama adalah karena ${penjelasanHasilPertama}`);
// jawab 4
let penjelasanHasilKedua = `nyamuk adalah sebuah string, namun setelah itu nyamuk dikonversi menjadi sebuah number, dikarnakan angsa adalah number sehingga tidak perlu dikenversi lagi, maka hasilnya adalah number + number jadi bisa ditambahkan`;
console.log(`penjelasan hasil kedua adalah karena ${penjelasanHasilKedua}`);

// latihan 4 form
let totalPena = 2;
let totalBukuFiksi = 5;
let totalBukuNonFiksi = 3;
let totalBukuDiBeli = 8;

let hargaPena = 2000;
let hargaBukuFiksi = 5000;
let hargaBukuNonFiksi = 7000;

let totalHargaPena = hargaPena * totalPena;
let totalHargaBukuFiksi = hargaBukuFiksi * totalBukuFiksi;
let totalHargaBukuNonFiksi = hargaBukuNonFiksi * totalBukuNonFiksi;

let totalPembelian =
  totalHargaPena + totalHargaBukuFiksi + totalHargaBukuNonFiksi;

console.log(
  `Total semua biaya yang harus dibayar Aisha adalah ${totalPembelian}`
);

// latihan 5 form
let penjumlahan1 = 5 + 3 * 2;
let penjumlahan2 = (5 + 3) * 2;
// jawab 1
console.log(`Nilai penjumlahan yang pertama adalah ${penjumlahan1}`);
// jawab 2
console.log(`Nilai penjumlahan yang kedua adalah ${penjumlahan2}`);
// jawab 3
let penjelasanPenjumlahanPertama = `yang dikalikan selalu didahulukan, baru setelah itu ditambahkan.`;
console.log(
  `Penjelasan penjumlahan yang pertama adalah karena ${penjelasanPenjumlahanPertama}`
);
// jawab 4
let penjelasanPenjumlahanKedua = `yang didalam kurung selalu didahulukan, walaupun yang diluar kurung adalah perkalian ataupun pembagian, baru setelah yang didalam kurung selesai baru dikalikan dengan yang ada diluar kurung.`;
console.log(
  `Penjelasan penjumlahan yang kedua adalah karena ${penjelasanPenjumlahanKedua}`
);

// latihan 6 form
let kresek = 4;
let kotak = 6;
let ember = 5 + (kresek = kotak);
// jawaban2
console.log(`nilai isi kresek adalah ${kresek}`);
console.log(`nilai isi kotak adalah ${kotak}`);
console.log(`nilai ember adalah ${ember}`);

let penjelasanEmber = `Ember bernilai 5, kemudian didalam kurung bernilai kresek, sedang kresek bernilai 4, namun karna kresek = kotak, maka nilai kresek berubah menjadi seperti nilai kotak yaitu 6, dan berakhir setelah ditambahkan maka memiliki hasil yaitu 11.`;
console.log(`Penjelasan nilai dari ember adalah ${penjelasanEmber}`);

// latihan 7 form
let x, y, z;
z = 5 + 10 + 15;
x = y;
y = z;
// jawab 2
console.log(`nilai x adalah ${x}, nilai y adalah ${y}, nilai z adalah ${z}`);

// latihan 8 form
let money = 4;
money = money * 2;
money = money * 2;
// jawab 1

console.log(`nilai variabel money adalah ${money}`);

// latihan 9 form
let J = 5;
J++;
let K = 8;
K--;

// jawab 1
console.log(`Hasil variabel J adalah ${J} dan variable K adalah ${K}`);
// jawab 2
let penjelasanJ = `ia menggunakan increment yang membuat variabel J bertambah 1.`;
let penjelasanK = `ia menggunakan decrement yang membuat variabel K berkurang 1.`;
console.log(
  `Hasil J demikian karena ${penjelasanJ} sedangkan variable K karena ${penjelasanK}`
);

// latihan 10 form
let room = "hafs";
let age = 18;
let shoesNumber = "42";
let married = false;

// jawab 1

console.log(`${typeof room}`);
console.log(`${typeof age}`);
console.log(`${typeof shoesNumber}`);
console.log(`${typeof married}`);
