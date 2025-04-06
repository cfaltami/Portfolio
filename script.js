// Modal Logic
const modal = document.getElementById("resumeModal");
const preview = document.getElementById("resumePreview");
const closeBtn = document.getElementById("closeModal");

preview.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
