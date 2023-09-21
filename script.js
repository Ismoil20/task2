"use strict";
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnButton = document.querySelector(".btn_button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".btn_button");
console.log(btnOpenModal);
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  button.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  button.classList.add("hidden");
}
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
0;
btnCloseModal.addEventListener("click", closeModal);
btnButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
