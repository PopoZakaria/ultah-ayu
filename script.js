const btnCard = document.getElementById("btnCard");

const divBaru = document.createElement("div");
const divBaru2 = document.createElement("div");
btnCard.addEventListener("click", () => {
  // play music
  let audio = document.getElementById("audio");
  audio.currentTime = 84;
  audio.play();
  audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= 125) {
      audio.pause();
      audio.currentTime = 84;
      audio.play();
    }
  });
  let divBaru3 = document.createElement('div');
  let header = document.querySelector('header');
  document.body.insertBefore(divBaru3, header);

  divBaru3.classList.add('notification');
  divBaru3.setAttribute("id", "notification");
  divBaru3.innerHTML=`<span class="kotak"></span>
  <span class="text">Stop Music</span>`;

  // stop music
  let notif = document.getElementById("notification");
  notif.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    document.body.removeChild(notif);
  });

  function addCard() {
    const script = document.getElementsByTagName("script")[0];

    document.body.insertBefore(divBaru, script);
    document.body.insertBefore(divBaru2, script);

    divBaru.classList.add("blur");
    divBaru2.classList.add("card");
  };
  function closeCard() {
    document.body.removeChild(blur);
    document.body.removeChild(card);
  };
  addCard();
  const card = document.querySelector("div.card");
  const blur = document.querySelector("div.blur");
  card.innerHTML = `<div class="textArea taCenter">
    <button id="close">×</button>
      <p class="arabic al-center">بَارَكَ اللَّهُ فِي عُمْرِكْ</p>
      <p class="latin al-center">Barakallah fii umrik </b>Ayu Intan Pandini</p>
      <p class="al-center">“Semoga Allah melimpahkan keberkahan dalam bertambahnya usiamu.”</p>
    </div>
  <div class="btnArea">
  <button id='lanjut1'>Lanjut!</button>
  </div>`;

  const btnClose = document.getElementById("close");
  btnClose.addEventListener("click", () => {
    closeCard();
  });
  // pesan 2
  const lanjut1 = document.getElementById("lanjut1");
  lanjut1.addEventListener("click", () => {
    closeCard();
    addCard();
    card.innerHTML = `<button id="close">×</button>
    <div class="textArea">
    <p>Semoga Apa yang kamu cita-citakan terwujud:</p>
    <ul>
          <li>Cantik,</li> 
          <li>Sholehah,</li>
          <li>Pinter,</li>
          <li>Sukses,</li>
          <li>Tahun ini Semoga lancar urusannya😁.</li>
          </ul>
        <p>Pokoknya doa-doa terbaik buat ayang 🥰</p>
        <p class="arabic al-center">أٰمِيْنْ</p>
      </div>
      <div class="btnArea">
      <button id="lanjut2">Lanjut!</button>
      </div>`;
    const lanjut2 = document.getElementById('lanjut2');
    lanjut2.addEventListener('click',()=>{
      closeCard();
      addCard(); 
      card.innerHTML=`<button id="close">×</button>
        <div class="textArea">
        <p class="al-center gede">🎁</p>
        <p class="al-center">Sementara cuma bisa ngasih ini, Surprisenya nyusul ya hihi😥</p><br/>
        <p class="al-center">Semoga kamu seneng sama surprisenya nanti😆</p>
        </div>
        <div class="btnArea">
          <button id="lanjut3">Lanjut!</button>
        </div>`;
      const btnClose = document.getElementById("close");
      btnClose.addEventListener("click", () => {
        closeCard();
      });
      const lanjut3 =document.getElementById('lanjut3');
      lanjut3.addEventListener('click',()=>{
        closeCard();
        addCard(); 
        card.innerHTML=`<button id="close">×</button>
        <div class="textArea">
        <p class="al-center">Gabisa berkata - kata lagi 🥰🥰</p><br/>
        <p class="al-center">Pokoknya aku akan selalu dukung kamu kapanpun dan dimanapun kamu berada yaa🤗😋😘</p>
        </div>
        <div class="btnArea">
          <button id="lanjut4">Lanjut!</button>
        </div>`;
        const btnClose = document.getElementById("close");
        btnClose.addEventListener("click", () => {
          closeCard();
        });
        const lanjut4 =document.getElementById('lanjut4');
        lanjut4.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<button id="close">×</button>
          <div class="textArea">
          <p class="al-center gede">💖</p>
          <p class="al-center">Love u Ayang more, more and more😋</p>
          </div>
          <div class="btnArea">
            <button id="lanjut5">Lanjut!</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const lanjut5 =document.getElementById('lanjut5');
        lanjut5.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<button id="close">×</button>
          <div class="textArea">
          <p class="al-center gede">🥰</p><br/>
          <p class="al-center">Gatau Mau ngomong apalagi dah pokoknya sayang kamu teruss 😋</p>
          <p class="al-center">Makasii yaa ayang!</p>
          </div>
          <div class="btnArea">
            <button id="keluar">Dah Abis!</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const keluar = document.getElementById("keluar");
          keluar.addEventListener("click", () => {
            closeCard();
          });
        });
        });
      });
    })
    // close
    const btnClose = document.getElementById("close");
    btnClose.addEventListener("click", () => {
      closeCard();
    });
  });
});
