import { scoreManager } from "./scores.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector(".table-body");
  const clearBtn = document.querySelector(".clear-btn");
  const backBtn = document.querySelector(".back-btn");

  function updateScoresTable() {
    const scores = scoreManager.getTopScores();
    tableBody.innerHTML = scores
      .map(
        (score, index) => `
            <div class="table-row ${index < 3 ? "top-" + (index + 1) : ""}">
                <div class="table-cell">${index + 1}</div>
                <div class="table-cell">${score.score}</div>
                <div class="table-cell">${new Date(
                  score.date
                ).toLocaleDateString()}</div>
            </div>
        `
      )
      .join("");
  }

  clearBtn.addEventListener("click", () => {
    if (
      confirm("¿Estás seguro de que quieres borrar todas las puntuaciones?")
    ) {
      scoreManager.clearScores();
      updateScoresTable();
    }
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "menu.html";
  });

  updateScoresTable();
});
