var docelowyDzien, docelowyMiesiac, docelowyRok;
docelowyDzien = "29";
docelowyMiesiac = "02";
docelowyRok = "2023";



var docelowaGodzina, docelowaMinuta, docelowaSekunda;
docelowaGodzina = "15";
docelowaMinuta = "23";
docelowaSekunda = "00";



// ustawiamy datę do odliczania (lokalnie)
const countDownDate = new Date(docelowyRok + "-" + docelowyMiesiac + "-" + docelowyDzien + "T" + docelowaGodzina + ":" + docelowaMinuta + ":" + docelowaSekunda).getTime();

// aktualizujemy czas co 1 sekundę
const countdownTimer = setInterval(function() {

  // pobieramy aktualny czas
  const now = new Date().getTime();

  // obliczamy różnicę między czasem końca a aktualnym czasem
  const distance = countDownDate - now;

  // obliczamy godziny, minuty i sekundy
  const hours = Math.floor((distance / (1000 * 60 * 60)));
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  // formatujemy wynik
  const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // wyświetlamy wynik w elemencie o id="timer"
  document.getElementById("timer").innerHTML = result;

  // jeśli odliczanie się zakończyło, zatrzymujemy timer i wyświetlamy komunikat
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "Czas minął!";
  }
}, 1000);
