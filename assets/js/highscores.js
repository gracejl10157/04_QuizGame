function showHighScores() {

    var highscores = JSON.parse(window.localStorage.getItem("high_scores")) || [];

    highscores.sort(function(x, y) {
      return x.score - y.score;
    });

    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;

      var olEl = document.getElementById("high_scores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("high_scores");
    window.location.reload();
  }
  
  document.getElementById("clear_high_scores").onclick = clearHighscores;
  
  showHighScores(); // s/printHighscores/showHighscores
  