// JavaScript Portofolio Bagas Arya
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian dengan (Halaman Beranda), Data dari data/kealihan.json

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

async function muatKeahlian() {
  try {
    const response = await fetch("data/kealihan.json");
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    const skills = await response.json();

    skills.forEach((skill) => {
      const item = document.createElement("li");
      item.textContent = `${skill.nama} (${skill.level})`;
      daftarSkill.appendChild(item);
    });

    jumlahSkill.textContent = `Ada ${skills.length} Kealihan yang sedang saya Kembangkan.`;
    } catch (error) {
      jumlahSkill.textContent = "Daftar keahlian gagal dimuat.";
      console.error(error);
    }
}

if (daftarSkill) {
  muatKeahlian();
}

// 2. Tema gelap (Semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
        tombolTema.textContent = "Mode Terang";
    } else {
        tombolTema.textContent = "Mode Gelap";
    }
});

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");
const hampirPenuh = document.querySelector("#hampir-penuh");
const tombolKosongkan = document.getElementById("#tombol-kosongkan");

if (kotakPesan) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300karakter`;
    hampirPenuh.textContent = `${kotakPesan.value.length}/250karakter`;
    if (hampirPenuh) {
      removeEventListener = hitungKarakter.textContent = `${kotakPesan.value.length}/300karakter`;
    }
  });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/digitalportfolio.png",
    alt: "Tangkapan layar halaman profil Andi Pratama",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/kontakpertama.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/tabellium.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/PortofolioResponsif.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
  {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/KalkulatorNilaiRapor.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/LimaSoalLogika.png",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Lima fungsi logika yang masing-masing diuji masukan.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
    <article class="kartu">
    <span class="label">${item.kategori}</span>
    <h3>${item.judul}</h3>
    <img src="${item.gambar}" alt="${item.alt}" width="280">
    <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  tombol.addEventListener("click", () => {
    document.querySelectorAll(".tombol-filter").forEach((btn) => {
      btn.classList.remove("aktif");
    });

    tombol.classList.add("aktif");

    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }
  });
}

if (daftarProyek) {
  tampilkanProyek(proyek);
  document.querySelector("#filter-semua").classList.add("aktif");
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-HTML", "HTML");
  pasangFilter("#filter-CSS", "CSS");
  pasangFilter("#filter-JavaScript", "JavaScript");
}

// 5. Repository GitHub Terbaru ( Halaman Proyek )
const username = "bagasrpl45-art";
const alamatRepo = `https://api.github.com/users/${username}/repos`;
const pilihan = "?per_page=100";

const daftarRepo = document.querySelector("#daftar-repo");
const statusRepo = document.querySelector("#status-repo");

async function ambilRepo() {
  statusRepo.textContent = "Memuat ...";

  try {
    const response = await fetch(alamatRepo + pilihan);
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }
    const repos = await response.json();

    repos.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    const enamTeratas = repos.slice(0, 6);

    enamTeratas.forEach((repo) => {
      const item = document.createElement("li");
      const tautan = document.createElement("a");
      tautan.href = repo.html_url;
      tautan.target = "_blank";
      tautan.textContent = repo.name;

      const bahasa = repo.language || "tanpa bahasa";
      const detail = document.createTextNode(` (${bahasa}, ${repo.stargazers_count} bintang)`);

      item.appendChild(tautan);
      item.appendChild(detail);
      daftarRepo.appendChild(item);
    });

    statusRepo.textContent = `${enamTeratas.length} Repository yang Terakhir Diperbarui:`;
  } catch (error) {
    statusRepo.textContent = "Maaf, daftar Repository gagal Dimuat. Periksa username atau Coba Lagi Nanti.";
    console.error(error);
  }  
}

if (daftarRepo) {
  ambilRepo();
}