import { audioManager } from "./audio.js";

document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.getElementById("musicToggle");
  const sfxToggle = document.getElementById("sfxToggle");
  const difficultySelect = document.getElementById("difficultySelect");
  const vibrationToggle = document.getElementById("vibrationToggle");
  const saveBtn = document.querySelector(".save-btn");
  const backBtn = document.querySelector(".back-btn");
  const exitBtn = document.querySelector(".exit-btn");

  // Load saved settings
  musicToggle.checked = !audioManager.isMuted;
  sfxToggle.checked = localStorage.getItem("sfxEnabled") !== "false";
  difficultySelect.value = localStorage.getItem("difficulty") || "medium";
  vibrationToggle.checked =
    localStorage.getItem("vibrationEnabled") !== "false";

  // Add change event listeners
  musicToggle.addEventListener("change", () => {
    audioManager.toggleMute();
  });

  saveBtn.addEventListener("click", () => {
    // Save all settings
    localStorage.setItem("isMuted", !musicToggle.checked);
    localStorage.setItem("sfxEnabled", sfxToggle.checked);
    localStorage.setItem("difficulty", difficultySelect.value);
    localStorage.setItem("vibrationEnabled", vibrationToggle.checked);

    // Update audio manager
    audioManager.isMuted = !musicToggle.checked;
    audioManager.updateMuteState();

    alert("¡Configuración guardada!");
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "menu.html";
  });

  exitBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres salir del juego?")) {
      window.close();
      // Fallback for browsers that don't allow window.close()
      window.location.href = "about:blank";
    }
  });
});
