// soal 1
const penduduk = {
  namaDepan: "slamet",
  namaBelakang: "Santoso",
  umur: 45,
  pekerjaan: "Petani",
};
penduduk.kota = "Yogyakarta";
let { namaBelakang } = penduduk;
console.log(namaBelakang);
console.log(penduduk.pekerjaan);

// soal 2
let buahFavorit = ["mangga", "jeruk", "apel"];
buahFavorit.push("Pisang");
buahFavorit[1] = "anggur";
buahFavorit.pop();
console.log(buahFavorit);

// soal 3
let menuRestoran = new Map();
menuRestoran.set("nasi goreng", 15000);
menuRestoran.set("Mie Ayam", 13000);
menuRestoran.set("es teh manis", 5000);
menuRestoran.set("ayam bakar", 20000);
console.log(menuRestoran.get("Mie Ayam"));
menuRestoran.delete("es teh manis");
console.log(menuRestoran);

// soal 4
let koleksiBuku = new Set(["Laskar Pelangi", "Bumi", "Hujan"]);
koleksiBuku.add("Filosofi Teras");
koleksiBuku.add("Bumi");
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);

// soal 5
let pakaianPria = ["kemeja", "celana jeans", "jaket"];
let pakaianWanita = ["blouse", "rok", "cardigan"];

let pakaianToko = [...pakaianPria, ...pakaianWanita];
console.log(pakaianToko);
pakaianToko = [...pakaianToko, "kaos"];
console.log(pakaianToko);

// soal 6
function pesanMakanan(...menus) {
  console.log(menus);
}
pesanMakanan("nasi goreng", "sate ayam", "es teh manis");
