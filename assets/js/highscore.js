var scoreListEl = document.querySelector(".scorelist");
var clearButton = document.querySelector(".clear");
var scores = [];

// recall local storage to an array over a list
// The following fucntion renders items in a to list as <li> elements
function renderScoreList() {
    // Render a new li for each score
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);
      todoList.appendChild(li);
    }
  };

// clear button clears local storage
// Cleaner code with Arrow Functions https://www.youtube.com/watch?v=h33Srr5J9nY&t=332s
clearButton.addEventListener("click", () => {
  localStorage.clear()
});

// This function is being called below and will run with the page loads
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
      todos = storedScores;
    }
    renderScoreList();
  };