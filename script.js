const tombol = document.querySelectorAll(".tombol");
const grub = document.querySelectorAll(".grub");

for (let i = 0; i < tombol.length; i++) {
  tombol[i].addEventListener("click", function () {
    grub[i + 1].style.display = "inline";
  });
}
