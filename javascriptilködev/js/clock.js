// Kullanıcıdan ismini al ve ekranda göster
function askName() {
    const name = prompt("Lütfen adınızı giriniz");
    document.getElementById("myName").innerText = name;
  }
  
  // Saati, tarihi ve günü güncelle ve ekranda göster
  function showTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.toLocaleDateString('tr-TR', { weekday: 'long' });
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('myClock').innerHTML =  hour + ":" + minute + ":" + second + ' ' + day   ;
    setTimeout(showTime, 1000);
  }
  
  // Eğer sayı 10'dan küçükse başına sıfır ekle
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
  
  // Sayfa yüklendiğinde fonksiyonları çağır
  window.onload = function() {
    askName();
    showTime();
  };