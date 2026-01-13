
document.addEventListener("DOMContentLoaded", function () {
  const homeBtn = document.getElementById("home-btn");
  if (homeBtn) {
    homeBtn.onclick = function () {
      window.location.href = "../index.html";
    };
  }
});
