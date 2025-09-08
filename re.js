function storySiang() {
  document.body.style.backgroundColor = "#9fe0ecff";
  document.getElementById("output").innerHTML = `
    <h2> Cerita Siang ${nama}</h2>
    <p>
      Kalau siang hari di sekolah, saya biasanya akan ngobrol-ngobrol sama <b>${teman}</b>. 
      Tetapi jika di rumah saat libur, biasanya saya mencuci pakaian di hari Sabtu. 
      Setelah selesai, saya akan berleha-leha sambil bernyanyi dan mengatakan <b>${random}</b>.
    </p>
    <p>
      Kadang saya menghabiskan waktu dengan bermain <b>${game}</b> atau menonton <b>${nontonApa}</b>. 
      Kalau sudah lelah, biasanya saya lanjut tidur siang.
    </p>
    <p>
      Tidak jarang juga saya main bareng sama teman saya yang bernama <b>${teman}</b>. Kami biasanya menghabiskan waktu dengan bercerita tentang banyak hal, mulai dari pengalaman sehari-hari, mimpi yang ingin dicapai, sampai hal-hal kecil yang membuat kami tertawa bersama.
    </p>
  `;
}
