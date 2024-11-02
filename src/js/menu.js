document.addEventListener("DOMContentLoaded", () => {
  const bestScore = localStorage.getItem("bestScore") || 0;
  document.querySelector(".score-value").textContent = bestScore;

  document.querySelector(".play-btn").addEventListener("click", () => {
    window.location.href = "game.html";
  });

  document.querySelector(".credits-btn").addEventListener("click", () => {
    window.location.href = "credits.html";
  });
});
