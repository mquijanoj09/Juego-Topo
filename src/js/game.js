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
let btnEnd = document.querySelector(".end button");

let holeArray = Array.from(holes);
let characterArray = Array.from(character);

let menuButton = document.querySelector(".menu-btn");

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
      setTimeout(hideImage, 1100);
    } else {
      img.style.display = "none";
    }
  });
}

function setLives() {
  if (totalOfLives > 0) {
    totalOfLives -= 1;
    lifeAmount.innerText = totalOfLives;
    hearts[totalOfLives].src = "images/emptyheart.png";
  }

  if (totalOfLives === 0) {
    bright.style.display = "block";
    endBox.style.display = "block";
    tries.innerHTML = 0;
    score = 0;
  }

  const currentBest = localStorage.getItem("bestScore") || 0;
  if (finalScore > currentBest) {
    localStorage.setItem("bestScore", finalScore);
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
    } else if (hole.classList.contains("e200")) {
      finalScore += 200;
    }

    scoreHtml.innerHTML = finalScore;
  } else {
    earnArray[random].style.display = "none";
    setLives();
  }
}

function restartGame() {
  totalOfLives = 5;
  lifeAmount.innerText = totalOfLives;
  finalScore = 0;
  bright.style.display = "none";
  endBox.style.display = "none";
  scoreHtml.innerHTML = 0;
  hearts.forEach((heart) => {
    heart.src = "images/heartFull.png";
  });
}

startBox.addEventListener("click", () => initGame());

holeArray.forEach((hole) => {
  hole.addEventListener("click", () => {
    clickMole();
    isCorrectHole(hole);
  });
});

menuButton.addEventListener("click", () => {
  window.location.href = "menu.html";
});
