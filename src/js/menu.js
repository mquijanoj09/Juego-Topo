import { audioManager } from "./audio.js";

document.addEventListener("DOMContentLoaded", () => {
  audioManager.playBgMusic();

  document.querySelector(".play-btn").addEventListener("click", () => {
    window.location.href = "game.html";
  });

  document.querySelector(".scores-btn").addEventListener("click", () => {
    window.location.href = "scores.html";
  });

  document.querySelector(".settings-btn").addEventListener("click", () => {
    window.location.href = "settings.html";
  });

  document.querySelector(".credits-btn").addEventListener("click", () => {
    window.location.href = "credits.html";
  });
});
