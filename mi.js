function storyMalam() {
  document.body.style.backgroundColor = "#87f893ff";
  document.getElementById("output").innerHTML = `
    <h2> Cerita Malam ${nama}</h2>
    <p>
      Malam hari terkadang saya tidak kemana-mana, tetapi terkadang juga saya keluar untuk bermain dengan teman. 
      Namun karena saya tidak diperbolehkan pulang terlalu larut, jadi saya tidak main terlalu jauh.
    </p>
    <p>
      Aktivitas malam saya biasanya menggosok pakaian, lalu pada pukul 8 malam saya akan menghabiskan waktu dengan bermain handphone 
      dan kadang bablas sampai pukul 10 lewat.
    </p>
    <p>
      Kalau jam tidur saya sih.. kadang jam 10 saya sudah mengantuk, 
      tapi kalau siang hari sudah sempat tidur, biasanya saya jadi susah tidur di malam hari dan akhirnya begadang.
    </p>
    <p>
      Kadang saya sambil menonton <b>${nontonApa}</b> atau sekadar duduk di <b>${dudukDimana}</b> sambil memikirkan hari yang sudah dilewati.
    </p>
  `;
}
