// const tombol1 = document.querySelector(".tombol1");
// const Pesan2 = document.querySelector(".pesan_2");

// tombol1.addEventListener("click", function () {
//   console.log("ts berasil");
//   Pesan2.style.display = "inline";
// });
const tombol = document.querySelectorAll(".tombol");
const grub = document.querySelectorAll(".grub");

for (let i = 0; i < tombol.length; i++) {
  tombol[i].addEventListener("click", function () {
    grub[i + 1].style.display = "inline";
  });
}
