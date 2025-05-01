
const display = document.getElementById('display');

function appendNumber(value) {
  display.value += value;
  console.log(display);
}

function clearDisplay() {
  display.value = '';
}

function equal() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function hapus() {
  let display = document.getElementById("display"); // Ambil elemen display
  display.value = display.value.slice(0, -1); // Hapus satu karakter terakhir
}