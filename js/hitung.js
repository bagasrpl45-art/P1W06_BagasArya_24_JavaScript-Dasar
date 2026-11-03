// Menghitung Nilai Rata-rata dengan Kalkulator

// 7. Kalkulator Nilai
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

tombol.addEventListener("click", () => {
    const tugas = Number(inputTugas.value);
    const uts = Number(inputUts.value);
    const uas = Number(inputUas.value);
    const rata = hitungRataRata(tugas, uts, uas);
    const nilaiHuruf = predikat(rata);

    hasil.textContent = `Rata-rata nilai: ${rata.toFixed(2)} (predikat: ${nilaiHuruf})`;
});