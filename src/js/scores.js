class ScoreManager {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem("topScores")) || [];
  }

  addScore(score) {
    this.scores.push({
      score,
      date: new Date().toISOString(),
      id: Date.now(),
    });

    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 10);

    localStorage.setItem("topScores", JSON.stringify(this.scores));
  }

  getTopScores() {
    return this.scores;
  }

  clearScores() {
    this.scores = [];
    localStorage.setItem("topScores", JSON.stringify(this.scores));
  }
}

export const scoreManager = new ScoreManager();
