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
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");

  // Just in case something lags, force hide after 5s
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1000); // matches fade-out time
  }, 1000);
});
