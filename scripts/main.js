const btn = document.getElementById("love-btn");
const modal = document.getElementById("sorryModal");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
