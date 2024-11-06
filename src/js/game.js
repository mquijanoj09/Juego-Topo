import { audioManager } from "./audio.js";
import { scoreManager } from "./scores.js";
import emptyHeartImg from "../images/emptyheart.png";
import fullHeartImg from "../images/heartFull.png";

let startBox = document.querySelector(".start");
let bright = document.querySelector(".bright");
let holes = document.querySelectorAll(".hole");
let character = document.querySelectorAll(".character");
let tries = document.querySelector(".tries");
let random;
let hearts = document.querySelectorAll(".hearts img");
let lifeAmount = document.querySelector(".lifeAmount");
let totalOfLives = 5;
let toEarn = document.querySelectorAll(".earn");
let scoreHtml = document.querySelector(".end span");
let finalScore = 0;
let endBox = document.querySelector(".end");
let btnEnd = document.getElementById("menu-btn");
let btnAgain = document.getElementById("again-btn");

// Initialize heart images
hearts.forEach((heart) => {
  heart.src = fullHeartImg;
});

let holeArray = Array.from(holes);
let characterArray = Array.from(character);

function initGame() {
  bright.style.display = "none";
  startBox.style.display = "none";
}

function hideImage() {
  this.style.display = "none";
}

function clickMole() {
  random = Math.floor(Math.random() * holeArray.length);
  characterArray.forEach((img) => {
    if (characterArray.indexOf(img) === random) {
      img.style.display = "block";
      let triesNumber = parseFloat(tries.innerHTML);
      tries.innerHTML = triesNumber + 1;
      tries.style.fontSize = "1.2rem";

      function hideImage() {
        img.style.display = "none";
      }
      setTimeout(hideImage, getDifficultyTimeout());
    } else {
      img.style.display = "none";
    }
  });
}

function getDifficultyTimeout() {
  const difficulty = localStorage.getItem("difficulty") || "medium";
  const timeouts = {
    easy: 1300,
    medium: 1100,
    hard: 900,
  };
  return timeouts[difficulty];
}

function setLives() {
  if (totalOfLives > 0) {
    totalOfLives -= 1;
    lifeAmount.innerText = totalOfLives + "x";
    hearts[totalOfLives].src = emptyHeartImg;
    audioManager.playSfx("miss");
    if (localStorage.getItem("vibrationEnabled") !== "false") {
      navigator.vibrate && navigator.vibrate(200);
    }
  }

  if (totalOfLives === 0) {
    bright.style.display = "block";
    endBox.style.display = "block";
    tries.innerHTML = 0;
    scoreManager.addScore(finalScore);
  }
}

function isCorrectHole(hole) {
  let earnArray = Array.from(toEarn);

  if (holeArray.indexOf(hole) === random) {
    toEarn.forEach(() => {
      earnArray[random].style.display = "block";
    });
    if (hole.classList.contains("e100")) {
      finalScore += 100;
      audioManager.playSfx("hit");
    } else if (hole.classList.contains("e200")) {
      finalScore += 200;
      audioManager.playSfx("score");
    }

    scoreHtml.innerHTML = finalScore;
  } else {
    earnArray[random].style.display = "none";
    setLives();
  }
}

function restartGame() {
  totalOfLives = 5;
  lifeAmount.innerText = totalOfLives + "x";
  finalScore = 0;
  bright.style.display = "none";
  endBox.style.display = "none";
  scoreHtml.innerHTML = 0;
  hearts.forEach((heart) => {
    heart.src = fullHeartImg;
  });
}

startBox.addEventListener("click", () => initGame());

holeArray.forEach((hole) => {
  hole.addEventListener("click", () => {
    clickMole();
    isCorrectHole(hole);
  });
});

btnAgain.addEventListener("click", () => {
  restartGame();
});

btnEnd.addEventListener("click", () => {
  window.location.href = "menu.html";
});
