"use strict";

// document.querySelector(".message").textContent = "Doğru sayı";
// document.querySelector(".number").textContent = 15;
// console.log(document.querySelector(".number"));
// document.querySelector(".score").textContent = 60;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 25;
let number = Math.trunc(Math.random() * 20) + 1;
let puan = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const tahmin = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = "?";
  console.log(tahmin, typeof tahmin);
  if (!tahmin) {
    if (puan > 0) {
      document.querySelector(".message").textContent = "Sayı yok!";
      puan--;
      document.querySelector(".score").textContent = puan;
    } else {
      document.querySelector(".message").textContent = "Oyunu Kaybettiniz!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (tahmin === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Tebrikler Doğru Sayı!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (puan > highScore) {
      highScore = puan;
      document.querySelector(".highscore").textContent = puan;
    }
  } else if (tahmin < number) {
    if (puan > 0) {
      document.querySelector(".message").textContent = "Tahmininiz küçük!";
      puan--;
      document.querySelector(".score").textContent = puan;
    } else {
      document.querySelector(".message").textContent = "Oyunu Kaybettiniz!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (tahmin > number) {
    if (puan > 1) {
      document.querySelector(".message").textContent = "Tahmininiz Büyük!";
      puan--;
      document.querySelector(".score").textContent = puan;
    } else {
      document.querySelector(".message").textContent = "Oyunu Kaybettiniz!";
      document.querySelector(".score").textContent = 0;
    }
  }

  // document.querySelector(".message").textContent = "Doğru sayı";
});
document.querySelector(".again").addEventListener("click", function () {
  puan = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Sayı Giriniz!";
  document.querySelector(".score").textContent = puan;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
