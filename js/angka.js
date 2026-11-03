// Soal 1: Ganjil atau Genap
console.log("Soal 1: Ganjil atau Genap");
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }  
}

console.log(`ganjilGenap(2) = ${ganjilGenap(2)}`); // genap
console.log(`ganjilGenap(13) = ${ganjilGenap(13)}`); // ganjil
console.log(`ganjilGenap(9) = ${ganjilGenap(9)}`); // ganjil

// Soal 2: koversi suhu
console.log("Soal 2: Konversi suhu Celcius ke Fahrenheit");
function celciuskeFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

console.log(`celciuskeFahrenheit(0) = ${celciuskeFahrenheit(0)}`); // 32
console.log(`celciuskeFahrenheit(100) = ${celciuskeFahrenheit(100)}`); // 212
console.log(`celciuskeFahrenheit(-40) = ${celciuskeFahrenheit(-40)}`); // -40

// Soal 3: Menentukan nilai terbesar dari 3 angka
console.log("Soal 3: Menentukan nilai terbesar");
function angkaTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(`angkaTerbesar(5, 7, 9) = ${angkaTerbesar(5, 7, 9)}`); // 9
console.log(`angkaTerbesar(10, 3, 6) = ${angkaTerbesar(10, 3, 6)}`); // 10
console.log(`angkaTerbesar(1, 2, 3) = ${angkaTerbesar(1, 2, 3)}`); // 3

// Soal 4: Menentukan tahun kabisat
console.log("Soal 4: Menentukan tahun kabisat");
function tahunKabisat(tahun) {
  return (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
}

console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`); // true
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`); // false
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`); // false
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`); // true

// Soal 5: Menentukan harga diskon
console.log("Soal 5: Menentukan harga diskon");
function hargaDiskon(harga, diskon) {
    if (harga >= 250000 || diskon > 100) {
        return harga - (harga * diskon / 100);
    }
}

console.log(`hargaSetelahDiskon(300000, 10) = ${hargaDiskon(300000, 10)}`); // 270000
console.log(`hargaSetelahDiskon(250000, 20) = ${hargaDiskon(250000, 20)}`); // 200000
console.log(`hargaSetelahDiskon(500000, 40) = ${hargaDiskon(500000, 40)}`); // 300000