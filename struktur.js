/* ============================================
   STRUKTUR KEPENGURUSAN — HMTE UMRAH
   Data jabatan + interaksi klik + garis bagan
   ============================================ */
 
// ------------------------------------------------
// 1. DATA KEPENGURUSAN
//    Ganti "foto" dengan path gambar asli (mis. "foto/ketua.jpg")
//    Placeholder di bawah otomatis membuat avatar inisial.
// ------------------------------------------------
const dataJabatan = {
  "ketua": {
    tipe: "single",
    jabatan: "Ketua Umum",
    nama: "Nama Ketua Umum",
    foto: "",
    tugas: [
      "Memimpin dan bertanggung jawab penuh atas jalannya organisasi HMTE UMRAH.",
      "Menetapkan kebijakan umum dan arah strategis organisasi.",
      "Mengkoordinasikan seluruh divisi dan pengurus.",
      "Mewakili organisasi dalam hubungan internal maupun eksternal kampus.",
      "Menyampaikan laporan pertanggungjawaban di akhir masa kepengurusan."
    ]
  },
  "wakil": {
    tipe: "single",
    jabatan: "Wakil Ketua Umum",
    nama: "Nama Wakil Ketua Umum",
    foto: "",
    tugas: [
      "Membantu Ketua Umum dalam menjalankan roda organisasi.",
      "Menggantikan tugas Ketua Umum apabila berhalangan hadir.",
      "Mengawasi kinerja setiap divisi secara langsung.",
      "Menjadi penghubung koordinasi antar divisi."
    ]
  },
  "sekretaris": {
    tipe: "single",
    jabatan: "Sekretaris Umum",
    nama: "Nama Sekretaris Umum",
    foto: "",
    tugas: [
      "Mengelola administrasi dan kesekretariatan organisasi.",
      "Membuat serta mengarsipkan surat-menyurat resmi.",
      "Menyusun notulensi setiap rapat dan kegiatan.",
      "Menjaga inventaris dokumen organisasi."
    ]
  },
  "bendahara": {
    tipe: "single",
    jabatan: "Bendahara Umum",
    nama: "Nama Bendahara Umum",
    foto: "",
    tugas: [
      "Mengelola keuangan organisasi secara transparan.",
      "Menyusun laporan keuangan berkala.",
      "Mengatur alur kas masuk dan keluar setiap kegiatan.",
      "Menyimpan bukti transaksi dan menyusun anggaran."
    ]
  },
 
  "divisi-publikasi": {
    tipe: "divisi",
    jabatan: "Divisi Publikasi, Desain, dan Dokumentasi",
    tugas: [
      "Mengelola media sosial dan publikasi informasi organisasi.",
      "Membuat desain visual untuk kebutuhan kegiatan dan promosi.",
      "Mendokumentasikan seluruh rangkaian kegiatan HMTE."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  },
  "divisi-kewirausahaan": {
    tipe: "divisi",
    jabatan: "Divisi Kewirausahaan",
    tugas: [
      "Mengembangkan unit usaha sebagai sumber dana organisasi.",
      "Merancang dan menjalankan program kewirausahaan anggota.",
      "Menjalin kerja sama usaha dengan pihak luar."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  },
  "divisi-akademik": {
    tipe: "divisi",
    jabatan: "Divisi Pengembangan Akademik dan Profesi",
    tugas: [
      "Mengadakan kegiatan penunjang akademik dan keilmuan elektro.",
      "Memfasilitasi pengembangan kompetensi profesi anggota.",
      "Menyelenggarakan pelatihan, seminar, dan diskusi keilmuan."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  },
  "divisi-sdm": {
    tipe: "divisi",
    jabatan: "Divisi Pengembangan Sumber Daya Manusia",
    tugas: [
      "Membina dan mengembangkan kualitas anggota organisasi.",
      "Merancang program kaderisasi dan pelatihan kepemimpinan.",
      "Menjaga soliditas dan kekompakan antar anggota."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  },
  "divisi-relasi": {
    tipe: "divisi",
    jabatan: "Divisi Relasi dan Kemitraan",
    tugas: [
      "Menjalin dan menjaga hubungan dengan mitra eksternal.",
      "Mencari peluang kerja sama dan sponsorship kegiatan.",
      "Membangun jejaring dengan organisasi maupun instansi lain."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  },
  "divisi-abdisos": {
    tipe: "divisi",
    jabatan: "Divisi Abdi Sosial dan Masyarakat",
    tugas: [
      "Merancang dan melaksanakan program pengabdian masyarakat.",
      "Menjalin hubungan baik dengan masyarakat sekitar kampus.",
      "Mengoordinasikan kegiatan sosial dan kepedulian lingkungan."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  },
  "divisi-hubinternal": {
    tipe: "divisi",
    jabatan: "Divisi Hubungan Internal dan Kesejahteraan Anggota",
    tugas: [
      "Menjaga hubungan baik dan komunikasi antar anggota internal.",
      "Memantau serta memperhatikan kesejahteraan anggota.",
      "Menjadi wadah aspirasi dan penyelesaian permasalahan internal."
    ],
    kadiv: { nama: "Nama Kepala Divisi", foto: "" },
    anggota: [
      { nama: "Nama Anggota 1", foto: "" },
      { nama: "Nama Anggota 2", foto: "" },
      { nama: "Nama Anggota 3", foto: "" }
    ]
  }
};
 
// ------------------------------------------------
// 2. UTIL: avatar placeholder (dipakai jika field foto kosong)
// ------------------------------------------------
// Encode SVG jadi data-URL dengan aman untuk karakter apapun (termasuk
// nama dengan tanda baca/karakter khusus) tanpa memakai btoa() yang mudah error.
function svgKeDataUrl(svg){
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
 
function ambilInisial(nama){
  return (nama || "?")
    .trim()
    .split(/\s+/)
    .map(k => k[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "?";
}
 
function avatarPlaceholder(nama){
  const inisial = ambilInisial(nama);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
      <rect width="100%" height="100%" fill="#152652"/>
      <text x="50%" y="53%" font-family="Segoe UI, Arial" font-size="52"
        fill="#d4af37" text-anchor="middle" dominant-baseline="middle" font-weight="700">${inisial}</text>
    </svg>`;
  return svgKeDataUrl(svg);
}
 
function avatarPlaceholderSmall(nama){
  const inisial = ambilInisial(nama);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46">
      <rect width="100%" height="100%" fill="#152652"/>
      <text x="50%" y="53%" font-family="Segoe UI, Arial" font-size="16"
        fill="#d4af37" text-anchor="middle" dominant-baseline="middle" font-weight="700">${inisial}</text>
    </svg>`;
  return svgKeDataUrl(svg);
}
 
function avatarPlaceholderMedium(nama){
  const inisial = ambilInisial(nama);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">
      <rect width="100%" height="100%" fill="#152652"/>
      <text x="50%" y="53%" font-family="Segoe UI, Arial" font-size="32"
        fill="#d4af37" text-anchor="middle" dominant-baseline="middle" font-weight="700">${inisial}</text>
    </svg>`;
  return svgKeDataUrl(svg);
}
 
// ------------------------------------------------
// 3. ELEMEN DOM
// ------------------------------------------------
const boxes = document.querySelectorAll(".org-box");
const profileEmpty = document.getElementById("profileEmpty");
const profileContent = document.getElementById("profileContent");
const profileClose = document.getElementById("profileClose");
 
const profilePhotoWrap = document.getElementById("profilePhotoWrap");
const profilePhoto = document.getElementById("profilePhoto");
const profileNama = document.getElementById("profileNama");
const profileJabatan = document.getElementById("profileJabatan");
const profileTugasSection = document.getElementById("profileTugasSection");
const profileTugas = document.getElementById("profileTugas");
const profileDivisiSection = document.getElementById("profileDivisiSection");
const kadivPhoto = document.getElementById("kadivPhoto");
const kadivNama = document.getElementById("kadivNama");
const profileAnggota = document.getElementById("profileAnggota");
 
// ------------------------------------------------
// 4. RENDER PROFIL SAAT KOTAK DIKLIK
// ------------------------------------------------
function tampilkanProfil(id){
  const data = dataJabatan[id];
  if(!data) return;
 
  profileEmpty.hidden = true;
  profileContent.hidden = false;
 
  profileJabatan.textContent = data.jabatan;
 
  if(data.tipe === "single"){
    profileNama.textContent = data.nama;
    profilePhoto.src = data.foto || avatarPlaceholder(data.nama);
    profilePhoto.alt = "Foto " + data.nama;
    profilePhotoWrap.hidden = false;
 
    profileTugasSection.hidden = false;
    profileDivisiSection.hidden = true;
 
    profileTugas.innerHTML = "";
    data.tugas.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      profileTugas.appendChild(li);
    });
 
  } else if(data.tipe === "divisi"){
    profileNama.textContent = data.jabatan;
    profilePhotoWrap.hidden = true;
 
    profileTugasSection.hidden = false;
    profileTugas.innerHTML = "";
    data.tugas.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      profileTugas.appendChild(li);
    });
 
    profileDivisiSection.hidden = false;
    kadivPhoto.src = data.kadiv.foto || avatarPlaceholderMedium(data.kadiv.nama);
    kadivNama.textContent = data.kadiv.nama;
 
    profileAnggota.innerHTML = "";
    data.anggota.forEach(a => {
      const li = document.createElement("li");
 
      const img = document.createElement("img");
      img.src = a.foto || avatarPlaceholderMedium(a.nama);
      img.alt = "Foto " + a.nama;
 
      const span = document.createElement("span");
      span.textContent = a.nama;
 
      li.appendChild(img);
      li.appendChild(span);
      profileAnggota.appendChild(li);
    });
  }
 
  // tandai kotak aktif
  boxes.forEach(b => b.classList.remove("active"));
  const boxAktif = document.querySelector(`.org-box[data-id="${id}"]`);
  if(boxAktif) boxAktif.classList.add("active");
 
  // scroll panel ke atas & auto-scroll ke panel pada layar kecil
  document.getElementById("profilePanel").scrollTop = 0;
  if(window.innerWidth <= 980){
    document.getElementById("profilePanel").scrollIntoView({ behavior:"smooth", block:"start" });
  }
}
 
function tutupProfil(){
  profileContent.hidden = true;
  profileEmpty.hidden = false;
  boxes.forEach(b => b.classList.remove("active"));
}
 
boxes.forEach(box => {
  box.setAttribute("tabindex", "0");
  box.setAttribute("role", "button");
 
  box.addEventListener("click", () => tampilkanProfil(box.dataset.id));
  box.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      tampilkanProfil(box.dataset.id);
    }
  });
});
 
profileClose.addEventListener("click", tutupProfil);
 
// ------------------------------------------------
// 5. GAMBAR GARIS PENGHUBUNG BAGAN (SVG dinamis)
// ------------------------------------------------
const orgChart = document.querySelector(".org-chart");
 
function buatSvgConnector(){
  let svg = document.getElementById("connectorSvg");
  if(svg) svg.remove();
 
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "connectorSvg");
  orgChart.prepend(svg);
  return svg;
}
 
function titikTengah(el, containerRect){
  const r = el.getBoundingClientRect();
  return {
    top: { x: r.left + r.width / 2 - containerRect.left, y: r.top - containerRect.top },
    bottom: { x: r.left + r.width / 2 - containerRect.left, y: r.bottom - containerRect.top }
  };
}
 
function buatLine(x1, y1, x2, y2){
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#d4af37");
  line.setAttribute("stroke-width", "2");
  return line;
}
 
function gambarBagan(){
  const svg = buatSvgConnector();
  const containerRect = orgChart.getBoundingClientRect();
  svg.setAttribute("width", containerRect.width);
  svg.setAttribute("height", containerRect.height);
 
  const ketua = document.querySelector('.org-box[data-id="ketua"]');
  const wakil = document.querySelector('.org-box[data-id="wakil"]');
  const level3 = document.querySelectorAll(".level-3 .org-box");
  const level4 = document.querySelectorAll(".level-4 .org-box");
 
  // 1. Ketua -> Wakil
  const pKetua = titikTengah(ketua, containerRect);
  const pWakil = titikTengah(wakil, containerRect);
  svg.appendChild(buatLine(pKetua.bottom.x, pKetua.bottom.y, pWakil.top.x, pWakil.top.y));
 
  // 2. Wakil -> cabang level 3
  const branchY1 = pWakil.bottom.y + (titikTengah(level3[0], containerRect).top.y - pWakil.bottom.y) / 2;
  gambarCabang(svg, pWakil.bottom, level3, containerRect, branchY1);
 
  // 3. Trunk lanjut ke cabang level 4 (dari titik tengah wakil, melewati level 3)
  const branchY2 = titikTengah(level3[0], containerRect).bottom.y +
      (titikTengah(level4[0], containerRect).top.y - titikTengah(level3[0], containerRect).bottom.y) / 2;
 
  // trunk vertikal dari branchY1 turun ke branchY2 (melanjutkan garis pusat)
  svg.appendChild(buatLine(pWakil.bottom.x, branchY1, pWakil.bottom.x, branchY2));
 
  gambarCabang(svg, { x: pWakil.bottom.x, y: branchY2 }, level4, containerRect, branchY2);
}
 
function gambarCabang(svg, titikAtas, kotakAnak, containerRect, branchY){
  // garis vertikal dari titik atas turun ke ketinggian cabang (jika belum ada)
  svg.appendChild(buatLine(titikAtas.x, titikAtas.y, titikAtas.x, branchY));
 
  const titikAnak = Array.from(kotakAnak).map(el => titikTengah(el, containerRect).top);
 
  const xKiri = Math.min(...titikAnak.map(p => p.x));
  const xKanan = Math.max(...titikAnak.map(p => p.x));
 
  // garis horizontal cabang
  svg.appendChild(buatLine(xKiri, branchY, xKanan, branchY));
 
  // garis vertikal turun ke tiap kotak anak
  titikAnak.forEach(p => {
    svg.appendChild(buatLine(p.x, branchY, p.x, p.y));
  });
}
 
// gambar ulang saat resize / load (debounced)
let resizeTimeout;
function gambarUlangDebounced(){
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(gambarBagan, 120);
}
 
window.addEventListener("load", gambarBagan);
window.addEventListener("resize", gambarUlangDebounced);
 