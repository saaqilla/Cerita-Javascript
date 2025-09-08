function storyPagi() {
  document.body.style.backgroundColor = "#f8bbd0";
  document.getElementById("output").innerHTML = `
    <h2>Cerita Pagi ${nama}</h2>
    <p>
      Saya terbiasa bangun di pagi hari pada pukul 4.20 dini hari. 
      Lalu saat weekdays atau hari sekolah, saya akan pergi mandi dan mempersiapkan diri untuk berangkat ke sekolah. 
      Namun bila di hari-hari biasa, jam bangun tidur saya sedikit berbeda yaitu pada pukul 5 pagi atau paling lama pukul 6 pagi hari, 
      dan setelahnya saya akan beraktivitas seperti biasanya. 
    </p>
    <p>
      Saya tidak terbiasa sarapan pagi hari, atau paling mentok bisa sarapan di jam 9an. 
      Biasanya saya sarapan dengan <b>${sarapan}</b>. 
      Alasannya karena kalau saya makan lebih pagi, saya suka sakit perut.
    </p>
    <p>
      Kadang saya juga suka duduk <b>${dudukDimana}</b> untuk menikmati suasana pagi. Tetapi karena suasana nya sangat sejuk, saya terkadang sampai ketiduran dan mengigau sambil mengatakan <b>${random}</b> dengan suara yang lantang.
    </p>
  `;
}
